import React from "react";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {render, screen, waitFor} from "@testing-library/react";
import {APIComponent} from "./APIComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({name: "Lee"}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);
  const output = await waitFor(() => screen.findByRole("contentinfo"));
  expect(output).toHaveTextContent("Name is Lee");
});
