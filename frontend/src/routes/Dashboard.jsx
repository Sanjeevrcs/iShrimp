import { DashboardCards } from "@/components/DashboardCards";
import { DashboardCharts } from "@/components/DashboardCharts";
import { cardData } from "@/data/DashboardCardsData";
import { chartData } from "@/data/DashboardChartData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight py-5">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
        {cardData.map((card) => (
          <div key={card.id} className="bg-card p-4 rounded-lg shadow-md">
            <DashboardCards header={card.header} content={card.content} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex-grow">
          <div className="bg-card p-4 rounded-lg shadow-md h-full">
            <DashboardCharts data={chartData} />
          </div>
        </div>
        <div className="flex-grow">
          <video
            src=""
            className="w-full h-full rounded-lg shadow-md"
            controls
          />
        </div>
      </div>
    </div>
  );
}
