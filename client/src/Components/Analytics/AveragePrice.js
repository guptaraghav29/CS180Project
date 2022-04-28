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
    setAveragePrice(Math.floor(price / currentSelection.length));
  }, [carTableData, currentSelection]);

  return <div>Average Price: {averagePrice}</div>;
};

export default AveragePrice;
