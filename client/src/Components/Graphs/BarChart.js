import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
