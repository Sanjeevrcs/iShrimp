import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function Bots() {
  return (
    <div>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight py-5'>
        Bot Information
      </h1>
      <div className='flex gap-10 pb-12'>
        <Card className='w-full '>
          <CardHeader>
            <h2 className='text-xl font-bold'>Bot Material</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Main body</TableCell>
                <TableCell>
                  Kevlar 49 ( <b>Aramid Fiber</b> - Type of Synthetic Polymer )
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Hull</TableCell>
                <TableCell>HDPE PN20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Propulsion</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Thruster</TableCell>
                <TableCell>T200 Thruster</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Configuration</TableCell>
                <TableCell>Tricopter Configuration</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Robotic Arm</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>
                  6 degree of freedom
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>4-finger Claw</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Control Surfaces</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Ruddevator</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Canard</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Winglets</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <div className='flex gap-10 pb-12'>
        <Card className='w-full '>
          <CardHeader>
            <h2 className='text-xl font-bold'>Dimensions</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Weight</TableCell>
                <TableCell>8 Kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Length</TableCell>
                <TableCell>600 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Width</TableCell>
                <TableCell>200 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Height</TableCell>
                <TableCell>150 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Payload</TableCell>
                <TableCell>5 Kg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Bot Condition</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Temperature</TableCell>
                <TableCell>-30°C to +40°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Internal Pressure (Max)
                </TableCell>
                <TableCell>1 bar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Outer Pressure</TableCell>
                <TableCell>3 bar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Battery</TableCell>
                <TableCell>24 V</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Max Power used</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Max Power used</TableCell>
                <TableCell>5 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Internal Temperature Balance System</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Thrust at 0 Knots (Bollard Pull)
            </h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Forward</TableCell>
                <TableCell>150 lbf (68 kgf)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Reverse</TableCell>
                <TableCell>125 lbf (56 kgf)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Vertical</TableCell>
                <TableCell>80 lbf (36 kgf)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Heading missing</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>Depth Rating</TableCell>
                <TableCell>2000 MSW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Height </TableCell>
                <TableCell>0.15m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Diameter </TableCell>
                <TableCell>0.5m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Weight</TableCell>
                <TableCell>3800 lbs without tether </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Nominal Pay out rate
                </TableCell>
                <TableCell>80 ft. per min (24.4 meters per min)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pay in rate</TableCell>
                <TableCell>
                  60 to 100 ft. per min (18.3 to 30.5 meters per min)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'> Line pull</TableCell>
                <TableCell>250 lbs. with fill drum</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <div className='flex gap-10'>
        <Card className='w-[690px]'>
          <CardHeader>
            <h2 className='text-xl font-bold'>Sensors</h2>
          </CardHeader>
          <CardContent className='flex '>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Camera</TableCell>
                  <TableCell>
                    Full HD[1080p at 30fps],Full HD Glass Lens and 78° Field of
                    View
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>pH</TableCell>
                  <TableCell>8 pH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Temperature </TableCell>
                  <TableCell>[-30°C to +80°C]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>cP probe</TableCell>
                  <TableCell>2.83bcp</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Pressure</TableCell>
                  <TableCell>[0-50 bar]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Depth</TableCell>
                  <TableCell>50m</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Salinity of water body
                  </TableCell>
                  <TableCell>35,000 ppm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Total Dissolved Solute in Water Body
                  </TableCell>
                  <TableCell>600 ppm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardContent>
            <TableRow>
              <TableCell className='font-medium'>LED</TableCell>
              <TableCell>
                LED light [10 watts], 4 x 250-Watt halogen lamps, dimmer
                controlled on 2 circuits
              </TableCell>
            </TableRow>
          </CardContent>
        </Card>
        <Card className='w-[690px]'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Vehicle equipment fit as standard
            </h2>
          </CardHeader>
          <CardContent className='flex '>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Manipulator</TableCell>
                  <TableCell>1 x shilling 5 functions arm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    700 series Heading
                  </TableCell>
                  <TableCell>
                    1 x magnetically slaved Gyro compass- 1 x Tritech
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    IGC gyro Altimeter
                  </TableCell>
                  <TableCell>1 x Digital precision altimeters </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    PA200 Bathymetry
                  </TableCell>
                  <TableCell>1 x seaking 700 series bathymetric</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
