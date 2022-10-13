import React from 'react';
import { NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react';

interface IProps {
  label: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox: React.FC<IProps> = ({ label, value, setValue }) => {
  const format = (val: number | string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, '');

  const handleChange = (valueString: string) => {
    setValue(parse(valueString));
  };

  return (
    <VStack align='start'>
      <Text>{label}</Text>
      <NumberInput
        onChange={(valueString) => handleChange(valueString)}
        value={format(value)}
        min={0}
        w={['12rem', '20rem', '20rem', '25rem']}
      >
        <NumberInputField />
      </NumberInput>
    </VStack>
  );
};

export default InputBox;
