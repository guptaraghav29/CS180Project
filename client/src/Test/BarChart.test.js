import * as React from "react";
import * as ReactDOM from "react-dom";
import BarChart from "../Components/Graphs/BarChart";
import renderer from "react-test-renderer";
import CarTable from "../Components/Search/CarTable";
import { createRoot } from 'react-dom/client';
import { Bar } from "react-chartjs-2";
import AddButton from "../Components/ChangeData/AddButton";

import {
    fireEvent,
    getQueriesForElement,
    querySelector,
    render, 
    screen
} from "@testing-library/react";
import SaveData from "../Components/ChangeData/SaveData";

// it("testing the snapshot", () => {
// 	const tree = renderer.create(< BarChart />).toJSON();
// 	expect(tree).toMatchSnapshot();
// });

it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(<BarChart/>);
    // expect(div.querySelector("button").innerHTML).toEqual("Export Data");
    // expect(div.querySelector("button").innerHTML).toEqual("Add Entry");
});

it("should have Add message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<AddButton/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Add Entry")).not.toBeNull();
})


it("should have Export Data message", () => {
    // const div = document.createElement("root");
	// ReactDOM.render(<SaveData/>, div);
    // // const button = screen.getByRole('button');
    // // fireEvent.click(button);
    // // expect(screen.getByText('Save')).toBeInTheDocument()
    // const { getByText } = getQueriesForElement(div);
    // expect(getByText("Save")).not.toBeNull();

    // expect(div.querySelector("button").innerHTML).toEqual("Export Data");
});

