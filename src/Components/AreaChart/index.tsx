import React from 'react';
import { getProjectionData } from '../../API/getProjectionData';
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import { IGrpahData } from '../../interface/IGrpahData';
import { IProjectionResult } from '../../interface/IProjectionResult';
import { projectionResultToGraphData } from '../../utlis/projectionResultToGrpahData';
import { useInvestmentPlanner } from '../../Context/InvestmentPlannerContext';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Spinner,
} from '@chakra-ui/react';

let debounce: any = null;

const Chart = () => {
  const [graphData, setGraphData] = React.useState<IGrpahData[]>([]);
  const [isLoading, setIsLoading] = React.useState<Boolean>(false);
  const { initialInvestment, monthlyInvestment } = useInvestmentPlanner();

  const fetchData = React.useCallback(() => {
    getProjectionData(initialInvestment as number, monthlyInvestment as number)
      .then((resp) => {
        setGraphData(
          projectionResultToGraphData(resp.data as IProjectionResult[])
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [initialInvestment, monthlyInvestment]);

  React.useEffect(() => {
    // performing debouncing here
    if (initialInvestment && monthlyInvestment) {
      setIsLoading(true);
      debounce = setTimeout(() => {
        fetchData();
      }, 500);
      return () => {
        clearTimeout(debounce);
      };
    }
  }, [initialInvestment, monthlyInvestment, fetchData]);

  return (
    <React.Fragment>
      {graphData.length || isLoading ? (
        isLoading ? (
          <Box position='absolute' top='50%' left='50%'>
            <Spinner size='xl' color='primary.500' />
          </Box>
        ) : (
          <ResponsiveContainer width='100%' height='70%'>
            <ComposedChart
              width={500}
              height={400}
              data={graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis
                tickFormatter={(tick) => tick.split('-')[0]}
                dataKey='yearMonth'
              />
              <YAxis
                tickFormatter={(value) =>
                  `S$${new Intl.NumberFormat('en', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(value)}`
                }
                orientation='right'
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type='natural'
                dataKey='Top 25%'
                stackId='1'
                stroke='#5465ff4b'
                strokeWidth={2}
                fill='none'
              />
              <Area
                type='natural'
                dataKey='Median'
                stackId='1'
                stroke='#5465ff'
                strokeWidth={3}
                fill='#5465ff'
                fillOpacity={0.2}
              />
              <Area
                type='natural'
                dataKey='Bottom 10%'
                stackId='1'
                stroke='#5465ff4b'
                strokeWidth={2}
                fill='#5465ff'
                fillOpacity={0.2}
              />
              <Line
                type='natural'
                dataKey='2.5% pa.'
                stroke='#449699'
                strokeWidth={2}
                dot={false}
              />
              <Line
                type='natural'
                dataKey='Deposits'
                stroke='#294551'
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )
      ) : (
        <Flex
          width='100%'
          height='50%'
          justifyContent='center'
          alignItems='center'
        >
          <Alert status='error' w='50%'>
            <AlertIcon />
            <AlertTitle>
              Please enter Initial Investment and Monthly Investment details.
            </AlertTitle>
          </Alert>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default Chart;
