import type { Todo } from "../App";

export const TodoItem = ({ item }: { item: Todo }) => {
  return (
    <div
      className="p-3 bg-blue-300 border-2 flex gap-3 items-center"
      key={item.id}
    >
      <p className="text-2xl text-red-700">{item.id}</p>
      <p>{item.title}</p>
    </div>
  );
};
