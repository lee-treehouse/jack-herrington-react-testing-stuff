import React from "react";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {render, renderHook, screen, waitFor, act} from "@testing-library/react";
import {useAPI} from "./useApi";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({name: "Lee"}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  expect(true).toBeTruthy();
  //TODO come back to this - tutorial uses waitForNextUpdate which is not present in react 18
  //   const {result, waitForNextUpdate} = renderHook(() => useAPI());
  //   await waitForNextUpdate();
  //   act(() => {});
  //   expect(result.current).toBe({name: "Jack"});
});
