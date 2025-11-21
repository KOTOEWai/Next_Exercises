import { describe ,expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemedText from "./themedText";
import "@testing-library/jest-dom/vitest";
describe("themedText component", () => {
  it("should render correctly", () => {
     render (<ThemedText />);
    expect(screen.getByTestId("testId")).toHaveTextContent("default text");
  });
  it("should render with custom text", () => {
    render (<ThemedText text="Custom Text" />);
    expect(screen.getByTestId("testId")).toHaveTextContent("Custom Text");
  });
});