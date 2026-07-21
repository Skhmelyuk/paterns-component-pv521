interface ListItemsProps<T> {
  items: T[];
  renderTitle: () => React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
}

export function ListItems<T>({
  items,
  renderTitle,
  renderItem,
}: ListItemsProps<T>) {
  return (
    <div className="p-5 bg-amber-200 border-2 border-amber-600">
      {renderTitle()}
      <div className="grid grid-cols-3 gap-2">
        {items?.map((item) => renderItem(item))}
      </div>
    </div>
  );
}
