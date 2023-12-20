import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axiosInstance from "@/configs.jsx/axios";
export default function Bots() {
  const [botData, setBotData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/bot/`);
        console.log("data", res.data[0]);
        setBotData(res.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight py-5">
        Bot Information
      </h1>
      <div className="flex gap-10 pb-12">
        <Card className="w-full ">
          <CardHeader>
            <h2 className="text-xl font-bold">Bot Material</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Main body</TableCell>
                <TableCell>Kevlar 49</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hull</TableCell>
                <TableCell>HDPE PN20</TableCell>
              </TableRow>
              <TableCell className="w-100">
                Internal Temperature Balance System
              </TableCell>
            </TableBody>
          </Table>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <h2 className="text-xl font-bold">Propulsion</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">T200 Thruster</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Configuration</TableCell>
                <TableCell>Hex Configuration</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <h2 className="text-xl font-bold">Robotic Arm</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  6 degree of freedom
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4-finger Claw</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <h2 className="text-xl font-bold">Battery</h2>
          </CardHeader>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                Battery capacity {botData.battery_capacity}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bot dimensions {botData.bot_dimensions}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <Card className="w-[700px]">
        <CardHeader>
          <h2 className="text-xl font-bold">Sensors</h2>
        </CardHeader>
        <CardContent className="flex ">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Camera</TableCell>
                <TableCell>
                  Full HD[1080p at 30fps],Full HD Glass Lens and 78° Field of
                  View
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">pH</TableCell>
                <TableCell>8 pH</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Temperature </TableCell>
                <TableCell>[-30°C to +80°C]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">cP probe</TableCell>
                <TableCell>2.83bcp</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Pressure</TableCell>
                <TableCell>[0-50 bar]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Depth</TableCell>
                <TableCell>50m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Salinity of water body
                </TableCell>
                <TableCell>35,000 ppm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Total Dissolved Solute in Water Body
                </TableCell>
                <TableCell>600 ppm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
        </CardContent>
        
      </Card>
      
    </div>
  );
}
