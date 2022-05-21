import React from "react";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import Chart from "chart.js/auto";

const LineChart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Probability of a sale given car year.`,
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
  return (
    <div
      className="flex 1"
      style={{
        height: "100%",
        width: "50%",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
