import * as React from "react";
import * as ReactDOM from "react-dom";
import NavBar from "../Components/NavBar/NavBar";
import renderer from "react-test-renderer";
// import { createRoot } from 'react-dom/client';
import App from "../App";

import {
    fireEvent,
    getQueriesForElement,
    render,
	getByLabelText,
	screen
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< NavBar />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders the App page component", () => {
	const root = document.createElement("root");
	ReactDOM.render(< App />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Search")).not.toBeNull();
});

it("renders the search page without any crashes in Navbar component", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Search")).not.toBeNull();
});

it("change input selection", () => {
	const { getByLabelText } = render(< App />);
	const brandInput = getByLabelText("Model");

	// Default value
	expect(brandInput.value).toEqual("");

	fireEvent.change(brandInput, { target: { value: "CR-V" } });
	expect(brandInput.value).toEqual("CR-V");

	fireEvent.change(brandInput, { target: { value: "mercedes" } });
	expect(brandInput.value).toEqual("mercedes");

	fireEvent.change(brandInput, { target: { value: "" } });
	expect(brandInput.value).toEqual("");
});

it("renders the analytics tab without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Analytics")).not.toBeNull();
});


it("renders the advanced search tab without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Advanced Search")).not.toBeNull();
});