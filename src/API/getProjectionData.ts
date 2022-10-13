import axios from 'axios';

export const getProjectionData = async (
  initialInvestment: number,
  monthlyInvestment: number
) => {
  const data = {
    initialInvestment,
    monthlyInvestment,
  };
  const result = await axios.post(
    'http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms',
    data
  );
  return result;
};
