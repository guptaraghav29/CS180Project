import React, { useState, useEffect } from "react";

import Plot from 'react-plotly.js';
import { Bar } from 'react-chartjs-2';
import CarTable from "../Search/CarTable";
import BarChart from "../Graphs/BarChart";
import AddButton from "../ChangeData/AddButton";
import DeleteButton from "../ChangeData/DeleteButton";
import App from "../../App";

const ChartTrends = ({ carTableData, currentSelection }) => {
    const [frequency, setFrequency] = useState();
    console.log("Frequency: " + currentSelection)
    console.log("Frequency: " + carTableData)

    // useEffect(() => {
    //     let selectedChoices = currentSelection;
    //     let price = 0;
    //     carTableData.forEach((car) => {
    //         if (selectedChoices.includes(car.id)) {
    //             price += parseInt(car.price);
    //             selectedChoices = selectedChoices.filter((id) => id !== car.id);
    //         }
    //     });
    //     setFrequency(
    //         currentSelection.length === 0
    //             ? 0
    //             : Math.floor(price / currentSelection.length)
    //     );
    // }, [carTableData, currentSelection]);

    // const data = [
    //     {
    //         x: [1, 2, 3],
    //         y: [4, 5, 6],
    //         type: "bar",
    //     },
    // ];

    const labels = ['State'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1,2,3,4,5,6,7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Frequency of Car Listings in a state:',
            },
        },
    };

    return (
        <div>
            <br></br>
            {/* <CarTable/> */}

            <h1 style={{ fontSize: "40px" }}> Chart Trends </h1>
            {/* <p> Frequency of Car Listings in that state: {frequency} </p> */}
            <br></br>
            <AddButton />
            <DeleteButton />
            {/* <AveragePrice/> */}
            {/* <Plot data={data} layout={{ title: "Frequency of Car Listings By State" }} /> */}
            <Bar options={options} data={data} />

        </div>
    )
};

export default ChartTrends;
