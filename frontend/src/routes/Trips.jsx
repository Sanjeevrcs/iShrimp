import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoFilter } from 'react-icons/io5';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import TripCard from '@/components/TripCard';

export default function Trips() {
  return (
    <div>
      <div className='flex justify-center items-center h-full'>
        <Dialog>
          <Input
            type='text'
            placeholder='Search for a trip'
            className='w-1/2 px-4 py-2 my-10 border border-gray-300 rounded-md focus:outline-none focus:border-transparent'
          />
          <DialogTrigger asChild>
            <Button className='ml-2'>
              <IoFilter />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-foreground'>
                Sort & Filter
              </DialogTitle>
              <DialogDescription className='flex flex-col gap-4 p-5'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                  <Label htmlFor='terms'>Accept terms and conditions</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                  <Label htmlFor='terms'>Accept terms and conditions</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                  <Label htmlFor='terms'>Accept terms and conditions</Label>
                </div>
                <DialogClose asChild>
                  <Button>Apply</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant='outline'>Close</Button>
                </DialogClose>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex py-10 gap-10 flex-wrap'>
        {trips.map((data) => (
          <TripCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

const trips = [
  {
    id: '1',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '2',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '3',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '4',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '1',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '2',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '3',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
  {
    id: '4',
    name: 'Trip to the moon',
    banner: 'https://picsum.photos/200/300',
    startDate: '2021-10-10',
    duration: '2 days',
  },
];
