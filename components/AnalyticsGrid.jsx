import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";

const AnalyticsGrid = () => {
  const chartData = [
    {
      title: "Sales Distribution",
      component: <PieChart />,
    },
    {
      title: "Monthly Revenue",
      component: <BarChart />,
    },
    {
      title: "Traffic Trends",
      component: <LineGraph />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {chartData.map((chart, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            {chart.title}
          </h2>
          {chart.component}
        </div>
      ))}
    </div>
  );
};

export default AnalyticsGrid;
