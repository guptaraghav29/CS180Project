import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import CarBrands from "./Components/Search/CarBrands";
import CarModels from "./Components/Search/CarModels";
import CarYears from "./Components/Search/CarYears";
import CarTable from "./Components/Search/CarTable";
import NavBar from "./Components/NavBar/NavBar";

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
  const [frequency, setFrequency] = useState([]);

	localStorage.setItem('myData', frequency);
	console.log("Local storage: " + localStorage.getItem('myData'));
	console.log(Date.now());

  const data = {
    labels: graphLabels,
    datasets: [
      {
        data: graphPrices,
        backgroundColor: [
          "#90EE91",
          "#0F7C63",
          "#FFCCA6",
          "#F9F3DE",
          "#EC2E5F",
          "#2ECFCA",
          "#5D3B45",
          "#7F5F61",
          "#004B4B",
          "#7ACFD4",
          "#FFAFAF",
          "#F0D29C",
          "#DCBBCD",
          "#8385A0",
        ],
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  };

  const newData = {
    labels: graphLabels,
    datasets: [
      {
        data: frequency,
        backgroundColor: [
          "#90EE91",
          "#0F7C63",
          "#FFCCA6",
          "#F9F3DE",
          "#EC2E5F",
          "#2ECFCA",
          "#5D3B45",
          "#7F5F61",
          "#004B4B",
          "#7ACFD4",
          "#FFAFAF",
          "#F0D29C",
          "#DCBBCD",
          "#8385A0",
        ],
        hoverOffset: 10,
      },
    ],

    options: {
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Frequency of Car Listings in a state:",
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

    //average price
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

  
  //trend line feature
  useEffect(() => {
    let graphLabel2 = [];
    carTableData.forEach((car) => {
      if (!graphLabel2.includes(car.brand)) graphLabel2.push(car.brand);
		
    });
    setGraphLabels(graphLabel2);
    let averagePricePerYear = [];

    graphLabel2.forEach((brand) => {
      var sum = 0;
      var length = 0;
      for (let i = 0; i < data.length; i++) {
          if (data[i].brand === brand) {
            sum += parseInt(data[i].price);
            length++;
        }
      }
      averagePricePerYear.push([5,4,5 ]);
    });

    setFrequency(averagePricePerYear);
  }, [data]);

  return (
    <div className="flex flex-col items-center">
      <div id="models">
        <NavBar />
      </div>
      <h1 className="center text-4xl mb-6 py-2"> Used Car Dataset </h1>
      <div className="flex" href="models">
        <div className="px-2">
          <CarBrands
            carCompanies={carCompanies}
            currentCompany={currentCompany}
            setCurrentCompany={setCurrentCompany}
            setCurrentModel={setCurrentModel}
          />
        </div>
        <div className="px-2">
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
        <div className="px-2">
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
          <div className="px-10 py-4">
            <CarTable
              carTableData={carTableData}
              carCompanies={carCompanies}
              currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}
              fetchData={fetchData}
              chartData={data}
              chartData2={newData}
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
