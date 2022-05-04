import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["Red", "Green", "Yellow", "Orange"],
  datasets: [
    {
      data: [300, 50, 100, 200],
    },
  ],
};

const TestChart = () => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default TestChart;
