import * as React from "react";
 import * as ReactDOM from "react-dom";
import DeleteButton from "../Components/ChangeData/DeleteButton";
 import App from "../App";
import renderer from "react-test-renderer";
import { createRoot } from 'react-dom/client';
import CarTable from "../Components/Search/CarTable";

import {
    fireEvent,
    getQueriesForElement,
    render,
} from "@testing-library/react";


it("testing the snapshot", () => {
	const tree = renderer.create(< DeleteButton />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(< DeleteButton />);
});

it("should have Delete message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<DeleteButton/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Delete")).not.toBeNull();
})


