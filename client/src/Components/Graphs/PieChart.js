import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Average Odometer of Region",
      padding: {
        top: 30,
        bottom: 30,
      },
      color: "black",
      font: {
        weight: "bold",
        size: 15,
      },
    },
  },
};

const PieChart = ({ chartData }) => {
  return (
    <div
      className="flex 1"
      style={{
        height: "80%",
        width: "35%",
      }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
