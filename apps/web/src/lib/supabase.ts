import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- DEPRECIATION ENGINE (UAE COMPLIANT) ---
export const calculateDepreciation = (purchasePrice: number, salvageValue: number, usefulLifeYears: number, currentAgeMonths: number) => {
  const annualDepreciation = (purchasePrice - salvageValue) / usefulLifeYears;
  const monthlyDepreciation = annualDepreciation / 12;
  const accumulatedDepreciation = monthlyDepreciation * currentAgeMonths;
  const currentBookValue = Math.max(salvageValue, purchasePrice - accumulatedDepreciation);

  return {
    annualDepreciation,
    monthlyDepreciation,
    accumulatedDepreciation,
    currentBookValue,
    percentageDepreciated: (accumulatedDepreciation / purchasePrice) * 100
  };
};

// --- VAT COMPLIANCE ENGINE (5%) ---
export const calculateVAT = (amount: number) => {
  return amount * 0.05;
};
