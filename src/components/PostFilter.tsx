import React, { useState } from "react";
import type { Post } from "../App";

interface PostFilterProps {
  posts: Post[];
  children: (filteredPosts: Post[]) => React.ReactNode;
}

export function PostFilter({ posts, children }: PostFilterProps) {
  const [query, setQuery] = useState("");
  
  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 border border-slate-200 rounded-xl bg-white shadow-xs flex flex-col gap-4">
      <input
        type="text"
        placeholder="Пошук постів..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder-slate-400"
      />
      {children(filtered)}
    </div>
  );
}