import axiosInstance from '@/configs.jsx/axios';

import { useParams } from 'react-router-dom';
import { FaRegDotCircle } from 'react-icons/fa';
import damPhoto from './../assets/dam.jpg';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { TripRadarChart } from '@/components/TripRadarChart';
import { tripData1 } from '@/data/DashboardChartData';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useEffect } from 'react';
import { useState } from 'react';
import TripBarChart from '@/components/TripBarChart';
export default function TripDetail() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/trips/${id}`).then((res) => {
      setTrip(res.data);
    });
  }, [id]);

  const tripBarChartData = [
    { name: 'Corrosion', sales: Math.floor(Math.random() * 91 + 10) },
    {
      name: 'Excessive Vegitation',
      sales: Math.floor(Math.random() * 91 + 10),
    },
    { name: 'Abrasion', sales: Math.floor(Math.random() * 91 + 10) },
    { name: 'Cracks', sales: Math.floor(Math.random() * 91 + 10) },
    { name: 'Sedimentation', sales: Math.floor(Math.random() * 91 + 10) },
  ];

  return (
    <div className='flex gap-10 flex-col'>
      {trip && (
        <Card className='w-full p-5'>
          <CardContent>
            <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5 capitalize text-primary'>
              {trip.name}
            </h1>
            <br />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Start Date</TableCell>
                  <TableCell>{trip.start_date_time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>End Date</TableCell>
                  <TableCell>{trip.end_date_time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Duration</TableCell>
                  <TableCell>{trip.duration}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      <div className='flex flex-col gap-5 items-center w-full'>
        <div className='relative w-3/4'>
          <img
            src={damPhoto}
            alt='dam'
            className='w-full h-full object-cover rounded-md '
          />
          <HoverCard>
            <HoverCardTrigger
              style={{ position: 'absolute', bottom: '280px', left: '10px' }}>
              <FaRegDotCircle size='24px' color='red' />
            </HoverCardTrigger>
            <HoverCardContent>
              <Card className='w-full'>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Penstack Misalignment
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Missing Balls
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Turbine Imbalance
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Trash Gate Damage
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              style={{ position: 'absolute', top: '200px', left: '60px' }}>
              <FaRegDotCircle size='24px' color='red' />
            </HoverCardTrigger>
            <HoverCardContent>
              <Card className='w-full'>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>Corrosion</TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Excessive Vegitation
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Abrasion</TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Cracks</TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Sedimentation
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              style={{ position: 'absolute', top: '330px', left: '400px' }}>
              <FaRegDotCircle size='24px' color='red' />
            </HoverCardTrigger>
            <HoverCardContent>
              <Card className='w-full'>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Penstack Misalignment
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Missing Balls
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Turbine Imbalance
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>
                        Trash Gate Damage
                      </TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 91 + 10)}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              style={{ position: 'absolute', top: '530px', left: '710px' }}>
              <FaRegDotCircle size='24px' color='red' />
            </HoverCardTrigger>
            <HoverCardContent>
              {' '}
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>Corrosion</TableCell>
                    <TableCell>
                      {Math.floor(Math.random() * 91 + 10)}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      Excessive Vegitation
                    </TableCell>
                    <TableCell>
                      {Math.floor(Math.random() * 91 + 10)}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Abrasion</TableCell>
                    <TableCell>
                      {Math.floor(Math.random() * 91 + 10)}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Cracks</TableCell>
                    <TableCell>
                      {Math.floor(Math.random() * 91 + 10)}%
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Sedimentation</TableCell>
                    <TableCell>
                      {Math.floor(Math.random() * 91 + 10)}%
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className='flex gap-10 items-center flex-end'>
        <div className='h-[500px] w-1/2 '>
          <TripRadarChart data={tripData1} />
        </div>
        <div className='h-[500px] w-1/2 bg-card p-4 shadow-md rounded-lg flex items-end'>
          <TripBarChart data={tripBarChartData} />
        </div>
      </div>
    </div>
  );
}
