export type TPensionSection = {
  toggleSection: () => void;
};

export type TPensionProps = {
  employeeContribution: number;
  employerContribution: number;
  retirementAge: number;
  salary: number;
  retirementIncome: number;
};

export type TSavingsYear = {
  name: number;
  value: number;
};

export type TPensionResult = {
  pensionTotal: number;
  savingsPerYear: TSavingsYear[];
  ranOut: number | false;
};

export type TDesiredPensionResult = {
  goalSavingsPerYear: TSavingsYear[];
  goalPensionTotal: number;
  baseAddition: number;
};
