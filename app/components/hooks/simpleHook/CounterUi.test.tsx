import { render, screen ,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import  Counter  from "./CounterUi"; // Use typeof to get the type of the component

describe("Counter Component", () => {
  it("should render count", () => {
    render(<Counter initial={1} />);
    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect (screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });
  it("should render initial count", () => {
    render(<Counter initial={5} />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 5");
  });

  it("should increase and decrease count", async () => {
    render(<Counter />);
    const countText = screen.getByTestId("count");
    const incrementBtn = screen.getByText("Increment");
    const decrementBtn = screen.getByText("Decrement");

    await userEvent.click(incrementBtn);
    expect(countText.textContent).toContain("1");
    await userEvent.click(decrementBtn);
    expect(countText.textContent).toContain("0");
  });
});