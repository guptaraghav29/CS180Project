import React from "react";
import { Bar } from "react-chartjs-2";
//eslint-disable-next-line
import Chart from "chart.js/auto";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Average Price of Region",
      padding: {
        top: 10,
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

const BarChart = ({ chartData }) => {
  return (
    <div
      className="flex-1"
      style={{
        height: "100%",
        width: "49%",
        borderRight: "1px solid #ccc",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
