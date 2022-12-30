import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {Counter} from "./Counter";

test("counter Increments", () => {
  render(<Counter />);
  const buttonElement = screen.getByText("Increment");
  fireEvent.click(buttonElement);

  const counterDisplay = screen.getByRole("contentinfo");
  expect(counterDisplay).toHaveTextContent(/1/i);
  // expect(counterDisplay).toContainHTML("1");

  fireEvent.click(buttonElement);
  expect(counterDisplay).toHaveTextContent("Count is 2");
});
