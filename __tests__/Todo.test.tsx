import { render, screen, fireEvent } from "@testing-library/react";
import { TodoProvider } from "../app/components/TodoContext";
import TodoPage from "../app/(public)/Todo/page";
import { describe, it, expect } from "vitest";

// Helper function to wrap component with context provider
function renderWithProvider(ui: React.ReactElement) {
  return render(<TodoProvider>{ui}</TodoProvider>);
}

describe("Advanced Todo App", () => {
  it("should render Todo App title", () => {
    renderWithProvider(<TodoPage />);
    expect(screen.getByText("Todo App")).toBeInTheDocument();
  });

  it("should add a new todo item", () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Learn Vitest" } });
    fireEvent.click(addBtn);

    expect(screen.getByText("Learn Vitest")).toBeInTheDocument();
  });

  it("should clear input after adding a todo", () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Next.js Testing" } });
    fireEvent.click(addBtn);

    expect(input).toHaveValue("");
  });

  it("should filter completed todos", () => {
    renderWithProvider(<TodoPage />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Task A" } });
    fireEvent.click(addBtn);
    fireEvent.change(input, { target: { value: "Task B" } });
    fireEvent.click(addBtn);

    // Click on Task A to mark complete
    fireEvent.click(screen.getByText("Task A"));

    // Filter: Complete
    fireEvent.change(screen.getByTestId("filter-select"), {
      target: { value: "complete" },
    });
    expect(screen.getByText("Task A")).toBeInTheDocument();
    expect(screen.queryByText("Task B")).toBeNull();
  });

  it("should show 'No task found.' when list is empty", () => {
    renderWithProvider(<TodoPage />);
    expect(screen.getByText("No task found.")).toBeInTheDocument();
  });
});
