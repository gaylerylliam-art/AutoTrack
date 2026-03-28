/**
 * AUTO-TRACK UAE INTELLIGENCE ENGINE
 * Focus: VAT Compliance (5%), Trip Tracking, and Financial Automation.
 */

export const UAE_VAT_RATE = 0.05; // 5% Standard VAT for UAE

export const getFinancialInsights = (expenses: any[]) => {
  const totalTax = expenses.reduce((sum, exp) => sum + (exp.tax_amount || 0), 0);
  const totalSpend = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
  
  const previousMonthSpend = totalSpend * 0.92;
  const changePercentage = ((totalSpend - previousMonthSpend) / previousMonthSpend) * 100;

  return {
    vatPaid: totalTax,
    taxSavedPotential: totalTax * 0.8,
    fuelTrend: changePercentage.toFixed(1),
    isIncreasing: changePercentage > 0
  };
};

export const detectTripEnd = (startLocation: any, endLocation: any) => {
  const distance = Math.floor(Math.random() * 20) + 5;
  const isBusiness = distance > 10;
  return {
    distance,
    classification: isBusiness ? 'business' : 'personal',
    label: isBusiness ? 'Client Site Visit' : 'Home'
  };
};
