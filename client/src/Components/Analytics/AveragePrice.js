import React, { useState, useEffect } from "react";

const AveragePrice = ({ carTableData, currentSelection }) => {
  const [averagePrice, setAveragePrice] = useState(0);
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

  return (
    <div className="items-center flex justify-center">
      <h1>Average Price: ${averagePrice}</h1>
    </div>
  );
};

export default AveragePrice;
