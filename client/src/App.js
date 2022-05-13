import "./App.css";
import React, { useState, useEffect } from "react";
import CarBrands from "./Components/Search/CarBrands";
import CarModels from "./Components/Search/CarModels";
import CarYears from "./Components/Search/CarYears";
import CarTable from "./Components/Search/CarTable";
import NavBar from "./Components/NavBar/NavBar";
// import ChartTrends from "./Components/Analytics/ChartTrends";

function App() {
	const [carData, setCarData] = useState([]);
	const [carCompanies, setCarCompanies] = useState([]);
	const [currentCompany, setCurrentCompany] = useState("");
	const [companyModels, setCompanyModels] = useState([]);
	const [currentModel, setCurrentModel] = useState("");
	const [modelYears, setModelYears] = useState([]);
	const [currentYear, setCurrentYear] = useState("");
	const [carTableData, setCarTableData] = useState([]);
	const [currentSelection, setCurrentSelection] = useState([]);
	const [graphLabels, setGraphLabels] = useState([]);
	const [graphPrices, setGraphPrices] = useState([]);

	const data = {
		labels: graphLabels,
		datasets: [
			{
				data: graphPrices,
				backgroundColor: [
					"#2D87BB",
					"#64C2A6",
					"#AADEA7",
					"#E6F69D",
					"#FEAE65",
					"#F66D44",
				],
			},
		],
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		fetch("/cars")
			.then((response) => response.json())
			.then((data) => {
				setCarData(JSON.parse(JSON.stringify(data)));
				let cars = [];
				data.forEach((car) => {
					if (cars.indexOf(car.manufacturer) === -1) {
						cars.push(car.manufacturer);
					}
				});
				cars.sort();
				setCarCompanies(cars);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		let carModels = [];
		carData.forEach((car) => {
			if (
				car.manufacturer === currentCompany &&
				carModels.indexOf(car.model) === -1
			) {
				carModels.push(car.model);
			}
		});
		carModels.sort();
		setCompanyModels(carModels);
	}, [currentCompany, carData]);

	useEffect(() => {
		let years = [];
		carData.forEach((car) => {
			if (car.model === currentModel && years.indexOf(car.year) === -1) {
				years.push(car.year);
			}
		});
		years.sort();
		setModelYears(years);
	}, [currentModel, carData]);

	useEffect(() => {
		let currentSelection = [];
		carData.forEach((car) => {
			if (
				car.manufacturer === currentCompany &&
				car.model === currentModel &&
				car.year === currentYear
			) {
				currentSelection.push({
					id: car.id,
					region: car.region,
					brand: car.manufacturer,
					model: car.model,
					year: car.year,
					price: car.price,
					odometer: car.odometer,
					title_status: car.title_status,
					paint_color: car.paint_color,
					state: car.state,
					posting_date: car.posting_date,
				});
			} else if (
				car.manufacturer === currentCompany &&
				car.model === currentModel &&
				(currentYear === null || currentYear === "")
			) {
				console.log("check 1");
				currentSelection.push({
					id: car.id,
					region: car.region,
					brand: car.manufacturer,
					model: car.model,
					year: car.year,
					price: car.price,
					odometer: car.odometer,
					title_status: car.title_status,
					paint_color: car.paint_color,
					state: car.state,
					posting_date: car.posting_date,
				});
			} else if (
				car.manufacturer === currentCompany &&
				(currentModel === null || currentModel === "") &&
				(currentYear === null || currentYear === "")
			) {
				console.log("check 2");
				currentSelection.push({
					id: car.id,
					region: car.region,
					brand: car.manufacturer,
					model: car.model,
					year: car.year,
					price: car.price,
					odometer: car.odometer,
					title_status: car.title_status,
					paint_color: car.paint_color,
					state: car.state,
					posting_date: car.posting_date,
				});
			}
		});
		setCarTableData(currentSelection);
	}, [carData, currentCompany, currentModel, currentYear]);

	useEffect(() => {
		let graphLabel = [];
		carTableData.forEach((car) => {
			if (!graphLabel.includes(car.region)) graphLabel.push(car.region);
		});
		setGraphLabels(graphLabel);

		let graphPrice = [];
		graphLabel.forEach((region) => {
			var sum = 0;
			var length = 0;
			for (let i = 0; i < carTableData.length; i++) {
				if (carTableData[i].region === region) {
					sum += parseInt(carTableData[i].price);
					length++;
				}
			}
			graphPrice.push(sum / length);
		});
		setGraphPrices(graphPrice);
	}, [carTableData]);

	return (
		<div className="flex flex-col items-center">
			<div id="models" className="py-8">
				<NavBar />
			</div>
			<h1 className="center text-4xl mb-6"> Used Car Dataset </h1>
			<div className="flex" href="models">
				<div className="py-2 px-2">
					<CarBrands
						carCompanies={carCompanies}
						currentCompany={currentCompany}
						setCurrentCompany={setCurrentCompany}
						setCurrentModel={setCurrentModel}
					/>
				</div>
				<div className="py-2 px-2">
					<CarModels
						companyModels={companyModels}
						currentModel={currentModel}
						setCurrentModel={setCurrentModel}
						setCurrentYear={setCurrentYear}
						style={{
							display:
								currentCompany !== "" && currentCompany !== null
									? "block"
									: "none",
						}}
					/>
				</div>
				<div className="py-2 px-2">
					<CarYears
						modelYears={modelYears}
						currentYear={currentYear}
						setCurrentYear={setCurrentYear}
						style={{
							display:
								currentModel !== "" && currentModel !== null ? "block" : "none",
						}}
					/>
				</div>
			</div>

			<div className="py- w-full">
				{currentCompany !== "" && currentCompany !== null ? (
					<div className="px-8 py-8">
						<CarTable
							carTableData={carTableData}
							carCompanies={carCompanies}
							currentSelection={currentSelection}
							setCurrentSelection={setCurrentSelection}
							fetchData={fetchData}
							chartData={data}
						/>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<br />
			<br />
		</div>
	);
}

export default App;
