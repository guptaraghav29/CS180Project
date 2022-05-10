import * as React from "react";
import * as ReactDOM from "react-dom";
import AveragePrice from "../Components/Analytics/AveragePrice";
import { createRoot } from 'react-dom/client';
import renderer from "react-test-renderer";
import App from "../App";
import CarTable from "../Components/Search/CarTable";
import SaveData from "../Components/ChangeData/SaveData";

import {render, fireEvent, screen, getQueriesForElement} from "@testing-library/react";
// import SaveData from "../Components/ChangeData/SaveData";

// it("testing the snapshot", () => {
//     const tree = renderer.create(< AveragePrice />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

it("renders without any crashes", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(< AveragePrice />);
});

it("should have used car dataset message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<App/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Used Car Dataset")).not.toBeNull();
});

it("should have Analytics message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<App/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Analytics")).not.toBeNull();
});

// it("should have average price div", () => {
//     const root = document.createElement("root");
// 	// ReactDOM.render(<App/>, root);
// 	ReactDOM.render(<CarTable/>, root);
// 	// ReactDOM.render(<SaveData/>, root);
//     const { getByText} = getQueriesForElement(root);
//     expect(getByText("Average Price")).not.toBeNull();
// })
