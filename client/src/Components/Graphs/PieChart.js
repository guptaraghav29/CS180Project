import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieChart = ({ chartData }) => {
  return (
    <div>
      <h1> Average Miles</h1>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
