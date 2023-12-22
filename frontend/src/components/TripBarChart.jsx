import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TripBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={350} className='flex-end'>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey='sales' fill='#adfa1d' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TripBarChart;
