import * as React from "react";
import * as ReactDOM from "react-dom";
import AddButton from "../Components/ChangeData/AddButton";
import renderer from "react-test-renderer";
import { createRoot } from 'react-dom/client';
import App from "../App";

import {render, fireEvent, screen, getQueriesForElement} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< AddButton />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(< AddButton />);
});

it("should have used car dataset message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<App/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Used Car Dataset")).not.toBeNull();
})

it("should have Analytics message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<App/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Analytics")).not.toBeNull();
})

it("should have Add message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<AddButton/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Add Entry")).not.toBeNull();
})