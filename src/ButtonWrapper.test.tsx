import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {ButtonWrapper} from "./ButtonWrapper";

test("handles onClick", () => {
  const title = "Add Item";
  const onClick = jest.fn();

  render(<ButtonWrapper title={title} onClick={onClick} />);
  const buttonElement = screen.getByText(title);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
