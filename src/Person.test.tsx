import React from "react";
import {render, screen} from "@testing-library/react";
import {Person} from "./Person";

test("renders a name", () => {
  render(<Person name="Lee" />);
  const nameElement = screen.getByRole("contentinfo");
  //  const nameElement = screen.getByText(/Name is Lee/i);

  expect(nameElement).toHaveTextContent("Name is Lee");
  //  expect(nameElement).toBeInTheDocument();
});
