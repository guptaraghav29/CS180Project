import React, { useState, useEffect } from "react";

const AveragePrice = ({ carTableData, currentSelection }) => {
	const [averagePrice, setAveragePrice] = useState(0);
	const [averageMiles, setAverageMiles] = useState(0);

	useEffect(() => {
		let selectedChoices = currentSelection;
		let price = 0;
		carTableData.forEach((car) => {
			if (selectedChoices.includes(car.id)) {
				price += parseInt(car.price);
				selectedChoices = selectedChoices.filter((id) => id !== car.id);
			}
		});
		setAveragePrice(
			currentSelection.length === 0
				? 0
				: Math.floor(price / currentSelection.length)
		);
	}, [carTableData, currentSelection]);

	useEffect(() => {
		let selectedChoices = currentSelection;
		let miles = 0;
		carTableData.forEach((car) => {
			if (selectedChoices.includes(car.id)) {
				miles += parseInt(car.odometer);
				selectedChoices = selectedChoices.filter((id) => id !== car.id);
			}
		});
		setAverageMiles(
			currentSelection.length === 0
				? 0
				: Math.floor(miles / currentSelection.length)
		);
	}, [carTableData, currentSelection]);

	return (
		<div>
			<div> Average Price: {averagePrice} </div>
			{/* <div> Average Miles: {averageMiles} </div> */}
		</div>

	)
};

export default AveragePrice;
