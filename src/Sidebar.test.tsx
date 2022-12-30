import React from "react";
import {render, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";

test("renders links in the sidebar", () => {
  const items = [
    {
      name: "test",
      href: "/test",
    },
  ];

  render(<Sidebar items={items} />);
  const linkElements = screen.getAllByRole("navigation");

  expect(linkElements).toBeDefined();
  expect(linkElements.length).toBeGreaterThan(0);
  expect(linkElements[0]).toHaveTextContent(items[0].name);
  expect(linkElements[0]).toHaveAttribute("href", items[0].href);
});
