import * as React from "react";
import * as ReactDOM from "react-dom";
import SaveData from "../Components/ChangeData/SaveData";
import CarTable from "../Components/Search/CarTable";
import renderer from "react-test-renderer"; 
import { createRoot } from 'react-dom/client';
import BarChart from "../Components/Graphs/BarChart";
import App from "../App";
import DeleteButton from "../Components/ChangeData/DeleteButton";

import {
    fireEvent,
    getQueriesForElement,
    render,
    screen,
    getByText
} from "@testing-library/react";
import AddButton from "../Components/ChangeData/AddButton";


it("renders without any crashes", () => {
	const div = document.createElement("div");
	const root = createRoot(div);
	root.render(< SaveData />);
});

it("should have Add message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<AddButton/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Add Entry")).not.toBeNull();
})

it("should have Delete message", () => {
    const root = document.createElement("root");
	ReactDOM.render(<DeleteButton/>, root);
    const { getByText } = getQueriesForElement(root);
    expect(getByText("Delete")).not.toBeNull();
});

