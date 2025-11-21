import { describe ,expect , it } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
    it('should increment the count', () => {
       const { result } = renderHook(() => useCounter());
       expect(result.current.count).toBe(0);
       
    });
    it ('should startwith intial value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    })
    it ('should increment the count', () => {
        const { result } = renderHook(() => useCounter(0));
       act(() => result.current.increment());
       expect(result.current.count).toBe(1);
    })
    it ('should decrement the count', () => {
        const { result } = renderHook(() => useCounter(7));
       act(() => result.current.decrement());
       expect(result.current.count).toBe(6);
    })
   
});