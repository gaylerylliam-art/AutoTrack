import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gaylerylliam-art-autotrack-production.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'
);

export async function GET() {
  try {
    const { data, error } = await supabase.from('vehicles').upsert([
      { 
        id: 'demo-vehicle-1', 
        make: 'Toyota', 
        model: 'Land Cruiser', 
        year: 2024, 
        plate_number: 'DXB-12345', 
        purchase_price: 250000, 
        useful_life_months: 60,
        owner_id: 'd9e1150c-7b8c-4a1e-9d24-6564f0eecc9d' 
      }
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Production Demo Data Seeded" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
