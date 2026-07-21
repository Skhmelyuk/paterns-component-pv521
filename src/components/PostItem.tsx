import type { Post } from "../App";

export const PostItem = ({ item }: { item: Post }) => {
  return (
    <div className="p-3 bg-blue-100 border-2" key={item.id}>
      <h3 className="font-bold">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};