import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useFetch } from "./useFetch";

// 1. Mock global fetch
const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

describe("userfetch hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ✅ Success Case
  it("should start loading, fetch data, and return success result", async () => {
    const fakeData = { message: "hello world!" };

    // Mock fetch success
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    });

    const { result } = renderHook(() =>
      useFetch("https://codehubmm.com/users")
    );

    // Initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    // Wait for fetch to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // After fetch complete
    expect(result.current.data).toEqual(fakeData);
    expect(result.current.error).toBeNull();
  });

  // ✅ Error Case
  it("should handle fetch error correctly", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Failed to fetch!"));

    const { result } = renderHook(() =>
      useFetch("https://codehubmm.com/users2")
    );

    // Start: loading should be true
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    // Wait for fetch failure
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // After failure
    expect(result.current.error).toBe("Failed to fetch!");
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
