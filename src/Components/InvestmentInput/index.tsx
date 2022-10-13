import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useInvestmentPlanner } from '../../Context/InvestmentPlannerContext';
import InputBox from '../InputBox';

const InvestmentInput: React.FC = () => {
  const {
    initialInvestment,
    monthlyInvestment,
    setInitialInvestment,
    setMonthlyInvestment,
  } = useInvestmentPlanner();
  return (
    <React.Fragment>
      <InputBox
        value={initialInvestment}
        setValue={setInitialInvestment}
        label='Initial Investment'
      />
      <VStack alignItems='start'>
        <InputBox
          value={monthlyInvestment}
          setValue={setMonthlyInvestment}
          label='Monthly Investment'
        />
        <Text>
          Recommended:
          <Text as='span' color='primary.500' ml={2}>
            S$1,140
          </Text>
        </Text>
      </VStack>
    </React.Fragment>
  );
};

export default InvestmentInput;
