export interface IProjectionResult {
  sequence: number;
  yearMonth: string;
  totalDeposit: number;
  expectedAmounts: {
    10: number;
    50: number;
    75: number;
    benchmark: number;
  };
  chanceOfUnderPerformingBenchmark: number;
}
