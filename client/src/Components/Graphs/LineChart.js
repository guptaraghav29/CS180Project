import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Probability Of A Sale Given Car Year",
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

const LineChart = ({ chartData }) => {
  return (
    <div
      className="flex 1"
      style={{
        height: "100%",
        width: "51%",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
