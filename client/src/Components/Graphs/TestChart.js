import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TestChart = ({chartData}) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default TestChart;
