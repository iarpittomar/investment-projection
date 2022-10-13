import React from 'react';

interface IInvestmentPlannerContext {
  setInitialInvestment: React.Dispatch<React.SetStateAction<string>>;
  setMonthlyInvestment: React.Dispatch<React.SetStateAction<string>>;
  initialInvestment: number | string;
  monthlyInvestment: number | string;
}

const InvestmentPlannerContext =
  React.createContext<IInvestmentPlannerContext | null>(null);

const useInvestmentPlanner = () => {
  const context = React.useContext(InvestmentPlannerContext);
  if (!context) {
    throw new Error(
      `useInvestmentPlanner must be used within a InvestmentPlannerProvider`
    );
  }
  return context;
};

const InvestmentPlannerProvider = ({ ...props }) => {
  const [initialInvestment, setInitialInvestment] = React.useState('');
  const [monthlyInvestment, setMonthlyInvestment] = React.useState('');

  return (
    <InvestmentPlannerContext.Provider
      value={{
        setInitialInvestment,
        setMonthlyInvestment,
        initialInvestment,
        monthlyInvestment,
      }}
      {...props}
    ></InvestmentPlannerContext.Provider>
  );
};

export { InvestmentPlannerProvider, useInvestmentPlanner };
