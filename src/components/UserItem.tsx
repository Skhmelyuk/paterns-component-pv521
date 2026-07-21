import type { User } from "../App";

export const UserItem = ({ item }: { item: User }) => {
  return (
    <div className="p-3 bg-green-300 border-2" key={item.id}>
      <p>{item.name}</p>
      <p>{item.email}</p>
    </div>
  );
};
