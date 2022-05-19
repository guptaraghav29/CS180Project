import React, { useState } from 'react';
import Button from "@mui/material/Button";


// const headers = [
// 	{ label: 'ID', key: 'id' },
// 	{ label: 'Brand', key: 'brand' },
// 	{ label: 'Model', key: 'model' },
// 	{ label: 'Year', key: 'year' },
// 	{ label: 'Price', key: 'price' },
// 	{ label: 'Odometer', key: 'odometer' },
// 	{ label: 'Status', key: 'title_status' },
// 	{ label: 'Color', key: 'paint_color' },
// 	{ label: 'Region', key: 'region' },
// 	{ label: 'State', key: 'state' },
// 	{ label: 'Date Listed', key: 'posting_date' }
// ];

const ImportCSV = () => {

	const [file, setFile] = useState();

	const fileReader = new FileReader();

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (file) {
			fileReader.onload = function (event) {
				const csvOutput = event.target.result;
				console.log(csvOutput)
			};

			fileReader.readAsText(file);
		}
	};

	return (
		<div style={{ backgroundColor: "lightcyan" }}>
			<h1 style={{ padding: "1em", fontSize: "40px", fontWeight: "bold" }}> Import Car Dataset CSV </h1>
			<div style={{ textAlign: "center" }}>
				<form>
					<input
						type={"file"}
						id={"csvFileInput"}
						accept={".csv"}
						onChange={handleOnChange}
					/>
					<br></br>
					<Button
						onClick={(e) => {
							handleOnSubmit(e);
						}}
					>
						IMPORT CSV
					</Button>
				</form>
			</div>
		</div>
	);
};


export default ImportCSV