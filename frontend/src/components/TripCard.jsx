import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IoTimerOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function TripCard({ data }) {
  const { id, name, startDate, banner, duration } = data;
  return (
    <Link to={`/trips/${id}`} className='w-[300px]'>
      <Card className='w-[320px]'>
        <img
          src={banner}
          alt='trip'
          className='w-full h-48 object-cover rounded-t-md aspect-[3/4]'
        />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{startDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='inline'>
            <IoTimerOutline className='inline' />
            &nbsp; {duration}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
