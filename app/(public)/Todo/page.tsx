'use client'
import { useState } from "react";
import { useTodos } from "../../components/TodoContext";
import TodoItem from "../../components/TodoItem";

function Main() {
  const { addTodo, todos } = useTodos();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<"all" | "complete" | "ongoing">("all");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "complete") return todo.completed;
      if (filter === "ongoing") return !todo.completed;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="todo-input"
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleAdd}
          data-testid="add-btn"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2">
        <select
          value={filter}
          className="border rounded px-2 py-1"
          onChange={(e) => setFilter(e.target.value as any)}
          data-testid="filter-select"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="ongoing">Ongoing</option>
        </select>
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search-input"
        />
      </div>
      <div className="space-y-2">
        {filteredTodos.length === 0 && <span>No task found.</span>}
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Main;