import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import CarTable from "../Components/Search/CarTable";
import DeleteButton from "../Components/ChangeData/DeleteButton";
import renderer from "react-test-renderer";
import CarYears from "../Components/Search/CarYears";
import App from "../App";

import {
	getQueriesForElement
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< App />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(< CarTable />);
});

it("renders the user content without any crashes for car years", () => {
	const root = document.createElement("root");
	ReactDOM.render(< CarYears />, root);
	const { getByLabelText } = getQueriesForElement(root);

	expect(getByLabelText("Year")).not.toBeNull();
});

// it("renders delete button correctly", () => {
// 	const div = document.createElement("div");
// 	// ReactDOM.render(< CarTable />);
// 	ReactDOM.render(<DeleteButton/>, div.querySelector("button"))
// 	expect(div.querySelector("button").innerHTML).toEqual("Delete");
// });