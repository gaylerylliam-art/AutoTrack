import { Injectable } from '@nestjs/common';

@Injectable()
export class FinanceService {
  /**
   * Calculate Straight-Line Depreciation
   * Equation: Monthly = (Cost - Salvage) / LifeMonths
   */
  calculateDepreciation(
    purchasePrice: number,
    usefulLifeMonths: number,
    salvageValue: number = 0,
    monthsElapsed: number = 0
  ) {
    const monthlyDepreciation = (purchasePrice - salvageValue) / usefulLifeMonths;
    const accumulatedDepreciation = monthlyDepreciation * monthsElapsed;
    const currentBookValue = purchasePrice - accumulatedDepreciation;

    return {
      monthlyDepreciation,
      accumulatedDepreciation,
      currentBookValue,
      isFullyDepreciated: monthsElapsed >= usefulLifeMonths,
    };
  }

  /**
   * UAE VAT (5%) Calculation
   */
  calculateVAT(amount: number, isInclusive: boolean = false, rate: number = 0.05) {
    if (isInclusive) {
      const base = amount / (1 + rate);
      const tax = amount - base;
      return { base, tax, total: amount };
    } else {
      const tax = amount * rate;
      const total = amount + tax;
      return { base: amount, tax, total };
    }
  }
}
