import * as React from "react";
import * as ReactDOM from "react-dom";
import DeleteButton from "../Components/ChangeData/DeleteButton";
import App from "../App";
import renderer from "react-test-renderer";

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
	ReactDOM.render(< DeleteButton />, div);
});
