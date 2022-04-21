import * as React from "react";
import * as ReactDOM from "react-dom";
import CarTable from "../Components/Search/CarTable";
import renderer from "react-test-renderer";
import DeleteButton from "../Components/ChangeData/DeleteButton";

it("renders without any crashes", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CarTable />, div);
});

test("testing the snapshot", () => {
  const tree = renderer.create(<CarTable />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders delete button correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CarTable />, div);
  const deleteButton = div.querySelector("button");
  expect(deleteButton.innerHTML === "Delete");
});

