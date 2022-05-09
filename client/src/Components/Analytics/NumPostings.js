import React, { useState, useEffect } from "react";

const NumPostings = ({ carTableData, currentSelection }) => {
  const [numberPostings, setNumberOfPostings] = useState(0);

  useEffect(() => {
    let selectedChoices = currentSelection;
    let count = 0;
    carTableData.forEach((car) => {
      if (selectedChoices.includes(car.state)) {
        count = count + 1;
        selectedChoices = selectedChoices.filter((id) => id !== car.id);
      }
    });

    setNumberOfPostings(
      currentSelection.length === 0
        ? 0: Math.floor(currentSelection.state / currentSelection.length)
    );
  }, [carTableData, currentSelection]);

  return <div>Number of Postings by Location: {numberPostings}</div>;
};

export default NumPostings;
