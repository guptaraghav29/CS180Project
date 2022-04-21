import * as React from "react";
import * as ReactDOM from "react-dom";
import CarBrands from "../Components/Search/CarBrands";
import App from "../App";
import {
  fireEvent,
  getQueriesForElement,
  render,
} from "@testing-library/react";

it("renders therp content without any crashes", () => {
  const root = document.createElement("root");
  ReactDOM.render(<CarBrands />, root);
  const { getByLabelText } = getQueriesForElement(root);

  expect(getByLabelText("Brand")).not.toBeNull();
});

test("change input selection", () => {
  const { getByLabelText } = render(<App />);
  const brandInput = getByLabelText("Brand");

  // Default value
  expect(brandInput.value).toEqual("");

  fireEvent.change(brandInput, { target: { value: "honda" } });
  expect(brandInput.value).toEqual("honda");

  fireEvent.change(brandInput, { target: { value: "mercedes" } });
  expect(brandInput.value).toEqual("mercedes");

  fireEvent.change(brandInput, { target: { value: "" } });
  expect(brandInput.value).toEqual("");
});
