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
      text: 'Average Odometer of Region',
      padding: {
          top: 10,
      }
    }
  },
};

const PieChart = ({ chartData }) => {
  return (
    <div style={{
      height: "50%",
      width: "35%",
      textAlign: "center",
      paddingLeft: "1.5%",
      borderLeft: "5px solid #D0D0D0",    
    }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
