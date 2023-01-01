import {renderHook, act} from "@testing-library/react";
import {useCounter} from "./useCounter";

test("sbould increment", () => {
  const {result} = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);

  expect(true).toBeTruthy();
});
