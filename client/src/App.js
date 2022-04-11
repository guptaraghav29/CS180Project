import "./App.css";
import React, { useState, useEffect } from "react";
import CarBrands from "./Components/Search/CarBrands";
import CarModels from "./Components/Search/CarModels";
import CarYears from "./Components/Search/CarYears";

function App() {
  const [carData, setCarData] = useState([]);
  const [carCompanies, setCarCompanies] = useState([]);
  const [currentCompany, setCurrentCompany] = useState("");
  const [companyModels, setCompanyModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [modelYears, setModelYears] = useState([]);
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let cars = [];
    carData.forEach((car) => {
      if (
        cars.indexOf(car.manufacturer) === -1 &&
        car.manufacturer.length > 0
      ) {
        cars.push(car.manufacturer);
      }
    });
    cars.sort();
    setCarCompanies(cars);
  }, [carData]);

  useEffect(() => {
    let carModels = [];
    carData.forEach((car) => {
      if (
        car.manufacturer === currentCompany &&
        carModels.indexOf(car.model) === -1 &&
        car.manufacturer.length > 0
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

  return (
    <div className="flex flex-col items-center">
      <h1 className="center text-2xl"> Used Car Dataset </h1>
      <div className="py-2">
        <CarBrands
          carCompanies={carCompanies}
          currentCompany={currentCompany}
          setCurrentCompany={setCurrentCompany}
        />
      </div>
      <div className="py-2">
        <CarModels
          companyModels={companyModels}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
          style={{ display: currentCompany !== "" ? "block" : "none" }}
        />
      </div>
      <div className="py-2">
        <CarYears
          modelYears={modelYears}
          style={{ display: currentModel !== "" ? "block" : "none" }}
        />
      </div>
    </div>
  );
}

export default App;
