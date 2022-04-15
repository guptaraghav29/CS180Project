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
  const [currentChoice, setCurrentChoice] = useState([]);

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

  useEffect(() => {
    carData.forEach((car) => {
      if (
        car.manufacturer === currentCompany &&
        car.model === currentModel &&
        car.year === currentYear
      ) {
        setCurrentChoice(Object.entries(car));
      }
    });
  }, [carData, currentModel, currentCompany, currentYear]);

  return (
    <div className="flex flex-col justify-center items-center">
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
          value={currentYear}
          setCurrentYear={setCurrentYear}
          style={{ display: currentModel !== "" ? "block" : "none" }}
        />
      </div>

      <div className="">
        {currentYear !== "" && currentYear != null
          ? currentChoice.map((carDetail) => {
              if (carDetail[0] === "description") return;
              return (
                <div key={carDetail[0]} class="flex text-center justify-center">
                  <h2 className="font-bold mx-3">
                    {carDetail[1] === "" ? "" : carDetail[0]}{" "}
                  </h2>
                  <h2> {carDetail[1]} </h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
