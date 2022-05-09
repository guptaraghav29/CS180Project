import * as React from "react";
import * as ReactDOM from "react-dom";
import NavBar from "../Components/NavBar/NavBar";
import renderer from "react-test-renderer";

import {
    fireEvent,
    getQueriesForElement,
    render,
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< NavBar />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders the search tab without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Search")).not.toBeNull();
});

it("renders the probability tab without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Probability")).not.toBeNull();
});


it("renders the advanced search tab without any crashes", () => {
	const root = document.createElement("root");
	ReactDOM.render(< NavBar />, root);
	const { getByText } = getQueriesForElement(root);

	expect(getByText("Advanced Search")).not.toBeNull();
});