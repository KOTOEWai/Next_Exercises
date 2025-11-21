// Datafetch.test.tsx
import { describe, expect, it, vi } from "vitest";
import * as api from "./api";
import Datafetch from "./Datafetch";
import { fetchData } from "./api";
import { render, waitFor, screen } from "@testing-library/react";

describe("Datafetch component", () => {
  it("should render mocked data correctly", async () => {
    // 🧩 mock API call
  const spy =  vi.spyOn(api, "fetchData").mockResolvedValue({
      message: "mocked data1122",
    } as any);

    // 🧩 render component
    render(<Datafetch />);

    // 🧩 wait until component updates with mock data
    await waitFor(() => {
      expect(screen.getByTestId("result")).toHaveTextContent("mocked data1122");
    });
    
    expect(spy).toHaveBeenCalledTimes(1);
    
    spy.mockRestore();
  });
   it("fetches data", async () => {
    // 🧩 also mock fetchData here
    vi.spyOn(api, "fetchData").mockResolvedValue({
      message: "mocked data1122",
    } as any);

    const data = await api.fetchData();
    expect(data.message).toBe("mocked data1122");
  });
});
