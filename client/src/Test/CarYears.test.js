import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";
import CarYears from "../Components/Search/CarYears";
import renderer from "react-test-renderer";
import { createRoot } from 'react-dom/client';

import {
	fireEvent,
	getQueriesForElement,
	render,
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< CarYears />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(< CarYears />);
});

it("renders the user content without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< CarYears />, root);
	const { getByLabelText } = getQueriesForElement(root);

	expect(getByLabelText("Year")).not.toBeNull();
});

// it("change input selection", () => {
// 	const { getByLabelText } = render(< App />);
// 	const brandInput = getByLabelText("Brand");
// 	const modelInput = getByLabelText("Model");
// 	const yearInput = getByLabelText("Year");

// 	// Default value
// 	expect(brandInput.value).toEqual("");
// 	expect(modelInput.value).toEqual("");
// 	expect(yearInput.value).toEqual("");

// 	fireEvent.change(brandInput, { target: { value: "honda" } });
// 	expect(brandInput.value).toEqual("honda");

// 	expect(modelInput).not.toBeNull();
// 	fireEvent.change(modelInput, { target: { value: "accord" } });
// 	expect(modelInput.value).toEqual("accord");

// 	expect(yearInput).not.toBeNull();
// 	fireEvent.change(yearInput, { target: { value: "2020" } });
// 	expect(yearInput.value).toEqual("2020");

// 	fireEvent.change(yearInput, { target: { value: "" } });
// 	expect(yearInput.value).toEqual("");
// });