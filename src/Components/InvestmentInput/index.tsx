import { Text, Tooltip, VStack } from '@chakra-ui/react';
import React from 'react';
import { useInvestmentPlanner } from '../../Context/InvestmentPlannerContext';
import InputBox from '../InputBox';
import { InfoIcon } from '@chakra-ui/icons';

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
            S$1,140{' '}
            <Tooltip
              label='This ammount is recommended by over system.'
              aria-label='Recommended'
            >
              <InfoIcon />
            </Tooltip>
          </Text>
        </Text>
      </VStack>
    </React.Fragment>
  );
};

export default InvestmentInput;
