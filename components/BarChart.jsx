import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue (in USD)",
        data: [5000, 7000, 4000, 6000, 8000],
        backgroundColor: "#4CAF50",
        hoverBackgroundColor: "#45A049",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
