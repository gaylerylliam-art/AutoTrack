import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@11.1.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { action, priceId, organizationId, customerEmail } = await req.json();

    /* 
     * AutoTrack production billing flow 
     */
    if (action === "create-checkout-session") {
      const session = await stripe.checkout.sessions.create({
        customer_email: customerEmail,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${Deno.env.get("FRONTEND_URL")}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${Deno.env.get("FRONTEND_URL")}/billing/cancel`,
        metadata: {
          org_id: organizationId,
        },
      });

      return new Response(JSON.stringify({ sessionId: session.id, url: session.url }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    /* 
     * Billing Portal Flow Logic
     */
    if (action === "create-portal-session") {
        const { customerId } = await req.json();
        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: `${Deno.env.get("FRONTEND_URL")}/settings`,
        });
        return new Response(JSON.stringify({ url: session.url }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
