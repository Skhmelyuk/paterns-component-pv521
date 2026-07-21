import React, { useState } from "react";

// Модель даних Todo з нашого додатка
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoFilterProps {
  todos: Todo[];
  children: (filteredTodos: Todo[]) => React.ReactNode;
}

// Компонент фільтрації
export function TodoFilter({ todos, children }: TodoFilterProps) {
  const [query, setQuery] = useState("");

  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="p-6 border border-slate-200 rounded-xl bg-white  shadow-xs flex flex-col gap-4">
      <input
        type="text"
        placeholder="Пошук завдань..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder-slate-400"
      />
      {/* Викликаємо children як функцію та передаємо відфільтровані завдання */}
      {children(filtered)}
    </div>
  );
}
