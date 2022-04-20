import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";
import CarModels from "../Components/Search/CarModels";
import CarBrands from "../Components/Search/CarBrands";
import {
  fireEvent,
  getQueriesForElement,
  render,
} from "@testing-library/react";

it("renders the content without any crashes", () => {
  const root = document.createElement("root");
  ReactDOM.render(<CarModels />, root);
  const { getByText, getByLabelText } = getQueriesForElement(root);

  expect(getByLabelText("Model")).not.toBeNull();
});

test("change input selection", () => {
  const { getByLabelText } = render(<App />);
  const brandInput = getByLabelText("Brand");
  const modelInput = getByLabelText("Model");
  // Default value
  expect(brandInput.value).toEqual("");
  expect(modelInput.value).toEqual("");

  fireEvent.change(brandInput, { target: { value: "honda" } });
  expect(brandInput.value).toEqual("honda");

  expect(modelInput).not.toBeNull();
  fireEvent.change(modelInput, { target: { value: "accord" } });
  expect(modelInput.value).toEqual("accord");

  fireEvent.change(modelInput, { target: { value: "civic" } });
  expect(modelInput.value).toEqual("civic");

  fireEvent.change(modelInput, { target: { value: "" } });
  expect(modelInput.value).toEqual("");
});
