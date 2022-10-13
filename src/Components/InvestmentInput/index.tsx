import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import InputBox from '../InputBox';

const InvestmentInput: React.FC = () => {
  return (
    <React.Fragment>
      <InputBox label='Initial Investment' />
      <VStack alignItems='start'>
        <InputBox label='Monthly Investment' />
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
