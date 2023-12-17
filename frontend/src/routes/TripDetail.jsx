import { DashboardCharts } from '@/components/DashboardCharts';
import { Card } from '@/components/ui/card';
import axiosInstance from '@/configs.jsx/axios';
import { chartData } from '@/data/DashboardChartData';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TripDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const { name, start_date_time, end_date_time, banner, duration } = data;

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/trip/${id}/?format=json`);
        console.log(res.data);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className='flex flex-col gap-5'>
      <img
        src={banner}
        alt={name}
        className='w-full h-48 object-cover rounded-md aspect-[3/4]'
      />
      <h1 className='scroll-m-20 text-4xl font-bold py-5'>{name}</h1>

      <Card className='w-full p-5'>
        <p>{start_date_time}</p>
        <p>{end_date_time}</p>
        <p>{duration}</p>
      </Card>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <div className='bg-card p-4 rounded-lg shadow-md h-full'>
            <DashboardCharts data={chartData} />
          </div>
        </div>
        <div className='flex-grow'>
          <video
            src=''
            className='w-full h-full rounded-lg shadow-md'
            controls
          />
        </div>
      </div>
    </div>
  );
}
