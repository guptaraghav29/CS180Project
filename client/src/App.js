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
  const [currentSelection, setCurrentSelection] = useState([]);
  const [graphLabels, setGraphLabels] = useState([]);
  const [graphPrices, setGraphPrices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const getData = (carTableData) => {
    let i = 0;
    let j = 0;
    for (i = 0; i < graphLabelsNew.length; ++i) {
      var sum = 0;
      var count = 0;
      for (j = 0; j < carTableData.length; ++j) {
        if (graphLabelsNew[i] === carTableData[j].region) {
          sum += parseInt(carTableData[j].price);
          count += 1;
        }
      }
      // console.log(sum);
      // console.log(count);
      graphData.push(sum / count);
    }
    setGraphPrices(graphData);
  }

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

  let carTable = [];
  useEffect(() => {
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
          title_status: car.title_status,
          paint_color: car.paint_color,
          state: car.state,
          posting_date: car.posting_date,
        });
      }
    });
    setCarTableData(carTable);
  }, [carData, currentCompany, currentModel, currentYear]);

  let graphLabel = [];
  useEffect(() => {
    let i = 0;
    carTableData.forEach((region) => {
      graphLabel.push(carTableData[i].region);
      i++;
    });
    setGraphLabels(graphLabel);
  }, [carTableData]);



  //this is a new array that just gets rid of duplicates removing so we have a more accurate one
  let graphLabelsNew = [...new Set(graphLabels)];
  let graphData = [];
  useEffect(() => {
    getData(carTableData);
    // let i = 0;
    // let j = 0;
    // for (i = 0; i < graphLabelsNew.length; ++i) {
    //   var sum = 0;
    //   var count = 0;
    //   for (j = 0; j < carTableData.length; ++j) {
    //     if (graphLabelsNew[i] === carTableData[j].region) {
    //       sum += parseInt(carTableData[j].price);
    //       count += 1;
    //     }
    //   }
    //   // console.log(sum);
    //   // console.log(count);
    //   graphData.push(sum / count);
    // }
    /*
    carTableData.forEach((region) => {
      if (graphLabels.includes(carTableData[i].region)) {
        i++;
        return;
      }
      graphData.push(carTableData[i].price);
      i++;
    });
    */
   
    // setGraphPrices(graphData);
  }, [carTableData]);
  //console.log(graphData);
  
  const data = {
    labels: graphLabelsNew,
    datasets: [
      {
        data: graphPrices,
        backgroundColor: [
          "#F66D44",
          "#64C2A6",
          "#AADEA7",
          "#E6F69D",
          "#FEAE65",
          "#F66D44",
        ],
      },
    ],
  };
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
        {currentCompany !== "" &&
        currentCompany !== null &&
        currentModel !== "" &&
        currentModel !== null &&
        currentYear !== "" &&
        currentYear !== null ? (
          <div className="px-8 py-8">
            <CarTable
              carTableData={carTableData}
              carCompanies={carCompanies}
              currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}
              fetchData={fetchData}
              chartData={data}
              getData={getData}
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
