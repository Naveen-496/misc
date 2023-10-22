import { renderHook, CreateRenderer, act } from "@testing-library/react-hooks";
import { useSum } from "../src/useSum";

describe("useSum", () => {

   it("should return sum", () => {
      const { result } = renderHook(() => useSum());
      act(() => result.current.add(10));
       expect( result.current.sum).toBe(10);
   });
})