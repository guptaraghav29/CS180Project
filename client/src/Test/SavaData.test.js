import * as React from "react";
import * as ReactDOM from "react-dom";
import SaveData from "../Components/ChangeData/SaveData";
import renderer from "react-test-renderer";

import {
    fireEvent,
    getQueriesForElement,
    render,
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< SaveData />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	ReactDOM.render(< SaveData />, div);
});
