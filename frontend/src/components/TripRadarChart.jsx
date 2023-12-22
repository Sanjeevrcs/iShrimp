import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader } from './ui/card';
import { Table, TableBody, TableCell, TableRow } from './ui/table';
import './../assets/flip.css';
export function TripRadarChart({ data }) {
  const percentageData = data.map((entry) => ({
    ...entry,
    valuePercentage: (entry.value / entry.maximum) * 100,
    thresholdPercentage: (entry.threshold / entry.maximum) * 100,
  }));

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front bg-card p-4 shadow-md rounded-lg'>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart
              cx='50%'
              cy='50%'
              outerRadius='85%'
              data={percentageData}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name='Value'
                dataKey='valuePercentage'
                stroke='#adfa1d'
                fill='#adfa1d'
                fillOpacity={0.8}
              />
              <Radar
                name='Threshold'
                dataKey='thresholdPercentage'
                stroke='#ff7300'
                fill='#ff7300'
                fillOpacity={0.8}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='flip-card-back h-[500px]'>
          <Card>
            <CardHeader>
              <h2 className='text-xl font-bold'>Values</h2>
            </CardHeader>
            <CardContent className='flex  '>
              <Table>
                <TableBody>
                  {data.map(({ name, value, threshold }) => (
                    <TableRow key={name}>
                      <TableCell className='font-medium'>{name}</TableCell>
                      <TableCell>{value}</TableCell>
                      <TableCell>{threshold}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
