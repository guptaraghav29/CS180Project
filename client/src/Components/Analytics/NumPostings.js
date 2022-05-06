import React, { useState, useEffect } from "react";

const NumPostings = ({ carTableData, currentSelection }) => {
  const [numberPostings, setNumberOfPostings] = useState(0);

  useEffect(() => {
    let selectedChoices = currentSelection;
    let price = 0;
    carTableData.forEach((car) => {
      if (selectedChoices.includes(car.id)) {
        price += parseInt(car.state);
        selectedChoices = selectedChoices.filter((id) => id !== car.id);
      }
    });

    setNumberOfPostings(
      currentSelection.length === 0
        ? 0
        : Math.floor(price / currentSelection.length)
    );
  }, [carTableData, currentSelection]);

  return <div>Number of Postings by Location: {NumPostings}</div>;
};

export default NumPostings;
