import React from 'react';
import Button from "@mui/material/Button";
import Papa from "papaparse";

const ImportCSV = () => {

	// const [file, setFile] = useState();

	// const fileReader = new FileReader();

	// const handleOnChange = (e) => {
	// 	setFile(e.target.files[0]);
	// };

	// let csvOutput = "csv"

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault();

	// 	if (file) {
	// 		fileReader.onload = function (event) {
	// 			csvOutput = event.target.result;
	// 			console.log(csvOutput)
	// 		};

	// 		fetch(`/cars`, {
	// 			method: "POST",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ csvOutput }),
	// 		}).then((response) => {
	// 			if (!response.status === 200) {
	// 				console.log("error");
	// 			}
	// 			else {
	// 				console.log("suceess: cars added to original csv")
	// 			}
	// 		});

	// 		fileReader.readAsText(file);
	// 	}
	// };


	return (
		<div style={{ backgroundColor: "lightcyan" }}>
			<h1 style={{ padding: "1em", fontSize: "40px", fontWeight: "bold" }}> Import Car Dataset CSV </h1>
			<div style={{ textAlign: "center" }}>
				<form>
					<input
						type="file"
						accept=".csv,.xlsx,.xls"
						onChange={(e) => {
							const files = e.target.files;
							console.log(files);
							if (files) {
								console.log(files[0]);
								Papa.parse(files[0], {
									header: true,
									complete: function (results) {
										console.log("Finished importing: ", results.data);
										fetch(`/cars`, {
											method: "POST",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json",
											},
											body: results.data,
										}).then((response) => {
											if (!response.status === 200) {
												console.log("error");
											}
											else {
												console.log("suceess: cars added to original csv")
											}
										});
									}
								}
								)
							}
						}}
					/>
					<br></br>
					<Button>
						Submit CSV
					</Button>
				</form>
			</div>
		</div>
	);
};


export default ImportCSV