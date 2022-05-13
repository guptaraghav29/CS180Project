import React, { useState, useEffect } from "react";

import Plot from 'react-plotly.js';
import { Bar } from 'react-chartjs-2';
import CarTable from "../Search/CarTable";
import BarChart from "../Graphs/BarChart";
import AddButton from "../ChangeData/AddButton";
import DeleteButton from "../ChangeData/DeleteButton";

export const options = {
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

const ChartTrends = ({ carTableData, currentSelection }) => {
    // const [frequency, setFrequency] = useState(0);

    // useEffect(() => {
    //     // let location = currentSelection.state;
    //     let count = 1;
    //     carTableData.forEach((car) => {
    //         if (currentSelection.includes(car.state)) {
    //             // selectedChoices = selectedChoices.filter((id) => id !== car.id);
    //             count = count + 1;
    //         }
    //     });
    //     setFrequency(
    //         count / currentSelection.length
    //     );
    // }, [carTableData, currentSelection]);

    // const labels = [currentSelection.region];
    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Frequency',
    //             data: [frequency],
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         }
    //     ],
    // };

    const data = [
        {
            x: [currentSelection],
            y: [carTableData],
            type: "bar",
        },
    ];

    return (
        <div>
            <br></br>
            {/* <CarTable/> */}

            <h1 style={{ fontSize: "40px" }}> Chart Trends </h1>
            Frequency of Car Listings in that state: 
            {/* <Bar options={options} data={data} /> */}
            <br></br>
            <AddButton />
            <DeleteButton />
            {/* <AveragePrice/> */}
            <Plot data={data} layout={{ title: "Frequency of Car Listings By State" }} />

        </div>
    )
};

export default ChartTrends;
