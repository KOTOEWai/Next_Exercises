import type { Todo } from "./TodoContext";
import { useTodos } from "./TodoContext";

function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo } = useTodos();
  return (
    <div
      className={`flex justify-between items-center p-2 border rounded ${
        todo.completed && "bg-green-100"
      }`}
    >
      <span
        className={`cursor-pointer ${
          todo.completed && "line-through text-gray-500"
        }`}
        onClick={() => {
          toggleTodo(todo.id);
        }}
      >
        {todo.text}
      </span>
    </div>
  );
}

export default TodoItem;