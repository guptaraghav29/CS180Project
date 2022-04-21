import "./App.css";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((data) => {
        setCarData(JSON.parse(JSON.stringify(data)));
        let cars = [];
        data.forEach((car) => {
          if (
            cars.indexOf(car.manufacturer) === -1 &&
            car.manufacturer.length > 0
          ) {
            cars.push(car.manufacturer);
          }
        });
        cars.sort();
        setCarCompanies(cars);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let carModels = [];
    carData.forEach((car) => {
      if (
        car.manufacturer === currentCompany &&
        carModels.indexOf(car.model) === -1 &&
        car.model.length > 0
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
    let carTable = [];

    carData.forEach((car) => {
      if (
        car.manufacturer === currentCompany &&
        car.model === currentModel &&
        car.year === currentYear
      ) {
        carTable.push({
          id: car.id,
          region: car.region,
          brand: car.manufacturer,
          model: car.model,
          year: car.year,
          price: car.price,
          odometer: car.odometer,
          title_status: car.title_status.toUpperCase(),
          paint_color: car.paint_color,
          state: car.state.toUpperCase(),
          posting_date: car.posting_date.substr(0, 10),
        });
      }
    });
    setCarTableData(carTable);
  }, [carData, currentCompany, currentModel, currentYear]);

  return (
    <div className="flex flex-col items-center">
      <div id="models"></div>
      <NavBar />
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

      <div className="py-8 w-full">
        {currentCompany !== "" &&
        currentCompany !== null &&
        currentModel !== "" &&
        currentModel !== null &&
        currentYear !== "" &&
        currentYear !== null ? (
          <div>
            <CarTable carTableData={carTableData} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="center text-4xl mb-6"> Advanced Search </h1>
      <div id="adv">
        <NavBar />
        <br />
        <div>Test2</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id="prob">
        <NavBar />
        <br />
        <div>Test</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
