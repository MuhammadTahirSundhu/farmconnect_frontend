import React from "react";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Visitors",
        data: [100, 200, 150, 250],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        fill: true,
        tension: 0.4, // For smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
