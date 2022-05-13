import * as React from "react";
import * as ReactDOM from "react-dom";
import CarBrands from "../Components/Search/CarBrands";
import renderer from "react-test-renderer";
import App from "../App";
// import { createRoot } from 'react-dom/client';

import {
	fireEvent,
	getQueriesForElement,
	render,
} from "@testing-library/react";
import CarTable from "../Components/Search/CarTable";

it("testing the snapshot", () => {
	const tree = renderer.create(< CarBrands />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders the user content without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< CarBrands />, root);
	const { getByLabelText } = getQueriesForElement(root);

	expect(getByLabelText("Brand")).not.toBeNull();
});

it("change input selection", () => {
	const { getByLabelText } = render(< App />);
	const brandInput = getByLabelText("Model");

	// Default value
	expect(brandInput.value).toEqual("");

	fireEvent.change(brandInput, { target: { value: "Honda" } });
	expect(brandInput.value).toEqual("Honda");

	fireEvent.change(brandInput, { target: { value: "mercedes" } });
	expect(brandInput.value).toEqual("mercedes");

	fireEvent.change(brandInput, { target: { value: "" } });
	expect(brandInput.value).toEqual("");
});
