import React from 'react';
import { VStack, Flex, Text, Box } from '@chakra-ui/react';
import DotIcon from '../../Icons/DotIcon';
import { ITooltip } from '../../interface/ITooltip';
import { getFormattedLabel } from '../../utlis/getFormattedLabel';

const CustomTooltip: React.FC<ITooltip> = ({
  active = true,
  payload,
  label,
}) => {
  if (active && payload && payload.length && label) {
    return (
      <Box
        bgColor='#fff'
        p='1rem'
        border='1px solid'
        borderColor='primary.500'
        borderRadius='0.4rem'
        w='30rem'
      >
        <VStack>
          <Text pb={4} w='100%' borderBottom='1px solid' borderColor='gray.200'>
            {label && getFormattedLabel(label)}
          </Text>
          <Text color='gray.400'>Chance of outcome</Text>
          {payload.map((item, index) => (
            <React.Fragment>
              <Flex
                color={item.name !== 'Median' ? 'gray.400' : 'primary.500'}
                w='100%'
                justifyContent='space-between'
              >
                <Text color='inherit'>
                  <DotIcon color={item.color} mr='.5rem'></DotIcon>
                  {item.name}
                </Text>
                <Text color='inherit'>
                  {item.name === 'Top 25%' || item.name === 'Bottom 10%' ? (
                    <Text fontSize='1.5rem' as='span' color='inherit'>
                      {item.name === 'Top 25%' ? '> ' : '< '}
                    </Text>
                  ) : null}
                  S${item.value}
                </Text>
              </Flex>
              {index === 2 && (
                <Flex
                  w='100%'
                  justifyContent='space-between'
                  borderBottom='1px solid'
                  borderColor='gray.200'
                  color='gray.400'
                >
                  <Text color='inherit' mb='1rem'>
                    Underperforming 2.5% pa
                  </Text>
                  <Text color='inherit'>
                    {item.payload['Underperforming 2.5% pa.']}%
                  </Text>
                </Flex>
              )}
            </React.Fragment>
          ))}
        </VStack>
      </Box>
    );
  }

  return null;
};

export default CustomTooltip;
