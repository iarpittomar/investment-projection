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

const Chart = () => {
  const [graphData, setGraphData] = React.useState<IGrpahData[]>([]);

  const fetchData = React.useCallback(() => {
    getProjectionData(10000, 30000)
      .then((resp) => {
        setGraphData(
          projectionResultToGraphData(resp.data as IProjectionResult[])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return graphData.length > 0 ? (
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
  ) : (
    <div>Loading</div>
  );
};

export default Chart;
