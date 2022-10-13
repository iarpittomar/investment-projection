import { IProjectionResult } from './../interface/IProjectionResult';

export const projectionResultToGraphData = (data: IProjectionResult[]) => {
  return data.map((item) => {
    return {
      yearMonth: item.yearMonth,
      Deposits: item.totalDeposit,
      'Top 25%': item.expectedAmounts[75],
      Median: item.expectedAmounts[50],
      'Bottom 10%': item.expectedAmounts[10],
      'Underperforming 2.5% pa.': item.chanceOfUnderPerformingBenchmark,
      '2.5% pa.': item.expectedAmounts['benchmark'],
    };
  });
};
