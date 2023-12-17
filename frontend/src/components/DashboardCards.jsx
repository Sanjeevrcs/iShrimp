import { MdOutlineDashboard } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PropTypes from "prop-types";

export function DashboardCards({ header, content }) {
  return (
    <Card className="w-[320px]">
      <CardHeader className="flex items-center justify-between">
        <h2 className="inline text-center">{header}
        <MdOutlineDashboard className="text-gray-500 inline"/>
        </h2>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

DashboardCards.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};
