import type { Todo } from "../App";

interface ListItemsProps<T> {
  items: T[];
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

export function ListItems<T>({ items, title, renderItem }: ListItemsProps<T>) {
  return (
    <div className="p-5 bg-amber-200 border-2 border-amber-600">
      <h2 className="mb-4 text-center text-3xl">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        {items?.map((item) => renderItem(item))}
      </div>
    </div>
  );
}
