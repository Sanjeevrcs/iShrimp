import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function Dashboard() {
  const tasks = [
    'Clean the Algae sedimentation on the penstock',
    'Remove the corroded portion in penstock',
    'Remove the excessive Vegetation on the water surface',
    'Change the wicket gates',
    'Seal the crack in Main Inlet valve',
    'Weld the trash rack element',
    'Grind the abrasive particles in the penstock',
    'Seal the cracks in the Reservoir walls',
  ];
  const hydroPowerStations = [
    {
      name: 'Uri-II Hydroelectric Power Station',
      location: 'Jammu & Kashmir',
      capacity: 240,
    },
    {
      name: 'Ranganadi Hydroelectric Power Station',
      location: 'Arunachal Pradesh',
      capacity: 200,
    },
    {
      name: 'Koldam Hydroelectric Power Station',
      location: 'Himachal Pradesh',
      capacity: 180,
    },
    {
      name: 'Lower Barge Hydroeletric Power Station',
      location: 'Himachal Pradesh',
      capacity: 180,
    },
    {
      name: 'Parbati-III Hydroelectric Power Station',
      location: 'Himachal Pradesh',
      capacity: 140,
    },
  ];
  return (
    <div className='p-4'>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
        Dashboard
      </h1>
      <div className='flex gap-10'>
        <Card className='w-[500px]'>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-3'>
            {tasks.map((task) => (
              <div className='flex items-center justify-between' key={task}>
                <Checkbox id={task} />
                <label className='text-md align-right font-medium '>
                  {task}
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className='w-[400px]'>
          <CardHeader>
            <CardTitle>Report an issue</CardTitle>
            <CardDescription>
              What area are you having problems with?
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='area'>Area</Label>
              <Select defaultValue='billing'>
                <SelectTrigger id='area'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='team'>Arm</SelectItem>
                  <SelectItem value='billing'>Propulsion</SelectItem>
                  <SelectItem value='account'>Sensors</SelectItem>
                  <SelectItem value='deployments'>Control</SelectItem>
                  <SelectItem value='support'>Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='subject'>Subject</Label>
              <Input id='subject' placeholder='I need help with...' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                id='description'
                placeholder='Please include all information relevant to your issue.'
              />
            </div>
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button variant='ghost'>Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
        <Card className='w-[400px]'>
          <CardHeader>
            <CardTitle>Hydropower Plants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-8'>
              {hydroPowerStations.map((hydroPowerStation) => (
                <div className='flex items-center' key={hydroPowerStation.name}>
                  <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {hydroPowerStation.name}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {hydroPowerStation.location}
                    </p>
                  </div>
                  <div className='ml-auto font-medium'>
                    {hydroPowerStation.capacity} mw
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <br />
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videoutt.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            controls
            autoPlay
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            autoPlay
            controls
          />
        </div>
      </div>
      <br />
      <br />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <img
            src='http://localhost:5000'
            className='w-full h-full rounded-lg shadow-lg'
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/dash.mp4'
            className='w-full h-full rounded-lg shadow-lg'
            controls
            autoPlay
          />
        </div>
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout1.mp4'
            className='w-full h-full rounded-lg shadow-md'
            autoPlay
          />
        </div>
        <div className='flex-grow'>
          <video
            src='https://ishrimpapi.iqubekct.ac.in/media/videout2.mp4'
            className='w-full h-full rounded-lg shadow-md'
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
