import * as React from "react";
import * as ReactDOM from "react-dom";
import AveragePrice from "../Components/Analytics/AveragePrice";
import renderer from "react-test-renderer";

import {
    fireEvent,
    getQueriesForElement,
    render,
} from "@testing-library/react";

it("testing the snapshot", () => {
	const tree = renderer.create(< AveragePrice />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("renders without any crashes", () => {
	const div = document.createElement("div");
	ReactDOM.render(< AveragePrice />, div);
});
