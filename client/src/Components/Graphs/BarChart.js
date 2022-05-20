import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Average Price of Region',
    }
  },

};

const BarChart = ({ chartData }) => {
  return (
    <div style={{
      height: "100%",
      width: "60%",
      textAlign: "center",
      padding: "1.5%",
      // borderRight: "3px solid #D0D0D0",
    }}>
      {/* <h1> Average Price</h1> */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;