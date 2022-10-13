import React from 'react';
import { Box } from '@chakra-ui/react';
import InvestmentPlanner from './screens/InvestmentPlanner/InvestmentPlanner';

const App: React.FC = () => {
  return (
    <Box h='100vh' w='100vw' p={['2rem', '2rem', '4rem 8rem', '6rem 12rem']}>
      <InvestmentPlanner />
    </Box>
  );
};

export default App;
