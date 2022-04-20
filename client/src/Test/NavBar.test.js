import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";
import NavBar from "../Components/NavBar/NavBar";
import {
  fireEvent,
  getQueriesForElement,
  render,
} from "@testing-library/react";

it("renders the search tab without any crashes", () => {
    const root = document.createElement("root");
    ReactDOM.render(<NavBar />, root);
    const { getByText, getByLabelText } = getQueriesForElement(root);
  
    expect(getByText("Search")).not.toBeNull();
  });

  it("renders the probability tab without any crashes", () => {
    const root = document.createElement("root");
    ReactDOM.render(<NavBar />, root);
    const { getByText, getByLabelText } = getQueriesForElement(root);
  
    expect(getByText("Probability")).not.toBeNull();
  });


  it("renders the advanced search tab without any crashes", () => {
    const root = document.createElement("root");
    ReactDOM.render(<NavBar />, root);
    const { getByText, getByLabelText } = getQueriesForElement(root);
  
    expect(getByText("Advanced Search")).not.toBeNull();
  });