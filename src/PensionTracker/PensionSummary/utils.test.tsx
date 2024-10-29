// utils.test.ts
import { describe, it, expect } from 'vitest';
import { calculatePension, calculateDesiredPension } from './utils';
import { FieldValues } from 'react-hook-form';

describe('calculatePension', () => {
  it('calculates pension correctly with given contributions', () => {
    const mockProps: FieldValues = {
      employeeContribution: 5,
      employerContribution: 10,
      retirementAge: 65,
      salary: 50000,
      retirementIncome: 30000,
    };

    const { pensionTotal, savingsPerYear, ranOut } =
      calculatePension(mockProps);

    expect(pensionTotal).toBeGreaterThan(0);
    expect(savingsPerYear).toBeInstanceOf(Array);
    expect(ranOut).toEqual(false);
  });

  it('calculates pension correctly when funds run out', () => {
    const mockProps: FieldValues = {
      employeeContribution: 2,
      employerContribution: 3,
      retirementAge: 65,
      salary: 30000,
      retirementIncome: 35000,
    };

    const { ranOut } = calculatePension(mockProps);

    expect(ranOut).toBeLessThanOrEqual(81);
  });
});

describe('calculateDesiredPension', () => {
  it('calculates desired pension goal based on retirement income and age', () => {
    const mockProps: FieldValues = {
      retirementIncome: 30000,
      retirementAge: 65,
    };

    const { goalPensionTotal, goalSavingsPerYear } =
      calculateDesiredPension(mockProps);

    expect(goalPensionTotal).toBeGreaterThan(0);
    expect(goalSavingsPerYear).toBeInstanceOf(Array);
    expect(
      goalSavingsPerYear[goalSavingsPerYear.length - 1].value
    ).toBeLessThanOrEqual(goalPensionTotal);
  });
});
