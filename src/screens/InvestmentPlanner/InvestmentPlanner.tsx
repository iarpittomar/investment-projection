import { VStack, Text, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import Chart from '../../Components/AreaChart';
import InvestmentInput from '../../Components/InvestmentInput';

const InvestmentPlanner: React.FC = () => {
  return (
    <React.Fragment>
      <VStack align='start' spacing={[3, 4, 8, 10]}>
        <Heading as='h4' color='secondary.500'>
          Plan Projection
        </Heading>
        <Text>
          This is an illustration of your and our recommendation based on your
          input. We ran 1,000 simulations to determine your range of possible
          outcomes at any point in the future net of all fees.
        </Text>
        <HStack spacing={10} alignItems='start'>
          <InvestmentInput />
        </HStack>
      </VStack>
      <Chart />
    </React.Fragment>
  );
};

export default InvestmentPlanner;
