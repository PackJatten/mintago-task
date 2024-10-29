import { FieldValues } from 'react-hook-form';

const age = 25;
const annualInterestRate = 4.9;
const ageOfDeath = 81;

export const calculatePension = (props: FieldValues) => {
  const {
    employeeContribution,
    employerContribution,
    retirementAge,
    salary,
    retirementIncome,
  } = props;

  const workingYears = retirementAge - age;
  const pensionYears = ageOfDeath - retirementAge;
  const employeeAnnualContribution = salary * (employeeContribution / 100);
  const employerAnnualContribution = (employerContribution / 100) * salary;
  const totalAnnualContribution =
    employeeAnnualContribution + employerAnnualContribution;

  const savingsPerYear: any[] = [{ name: age, value: 0 }];
  const pensionTotal = Array.from({ length: workingYears }, (_, year) => {
    const yearIndex = year + 1;
    const savingsForYear = Number(
      (
        totalAnnualContribution *
        yearIndex *
        Math.pow(1 + annualInterestRate / 100, yearIndex)
      ).toFixed(2)
    );

    savingsPerYear.push({
      name: yearIndex + age,
      value: savingsForYear,
    });
    return savingsForYear;
  }).reduce((acc, current) => (acc = current), 0);

  let amount = pensionTotal;
  let index = 1;
  while (amount > 0 && index <= pensionYears) {
    amount -= retirementIncome;

    savingsPerYear.push({
      name: index + Number(retirementAge),
      value: amount > 0 ? amount : 0,
    });

    index++;
  }

  return {
    pensionTotal,
    savingsPerYear,
    ranOut: savingsPerYear.length + 24 !== 81 && savingsPerYear.length + 24,
  };
};

export const calculateDesiredPension = (props) => {
  const { retirementIncome, retirementAge } = props;
  const pensionYears = ageOfDeath - retirementAge;
  const workingYears = retirementAge - age;

  const goalPensionTotal = pensionYears * retirementIncome;

  const goalSavingsPerYear: any[] = [{ name: age, value: 0 }];
  let currentValue = 0;

  // TODO: factor in inflation to get a curved line
  const baseAddition = goalPensionTotal / workingYears;
  for (let i = 1; i < workingYears + 1; i++) {
    currentValue += baseAddition;
    goalSavingsPerYear.push({ name: i + age, value: currentValue });
  }

  for (let j = 1; j < pensionYears; j++) {
    currentValue -= retirementIncome;
    goalSavingsPerYear.push({
      name: j + Number(retirementAge),
      value: currentValue,
    });
  }

  return { goalSavingsPerYear, goalPensionTotal, baseAddition };
};
