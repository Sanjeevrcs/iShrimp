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
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
export default function TripDetail() {
  const { id } = useParams();

  return (
    <div className='flex gap-10 flex-col'>
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
              <FaRegDotCircle color='yellow' />
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
              <FaRegDotCircle color='black' />
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
              <FaRegDotCircle color='black' />
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
              <FaRegDotCircle color='black' />
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
      <div className='h-[500px] w-1/2 '>
        <TripRadarChart data={tripData1} />
      </div>
    </div>
  );
}
