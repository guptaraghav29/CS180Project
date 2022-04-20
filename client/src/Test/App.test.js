import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";
import { getQueriesForElement } from "@testing-library/react";

it("renders the content without any crashes", () => {
  const root = document.createElement("root");
  ReactDOM.render(<App />, root);
  const { getByText } = getQueriesForElement(root);

  expect(getByText("Used Car Dataset")).not.toBeNull();
});
