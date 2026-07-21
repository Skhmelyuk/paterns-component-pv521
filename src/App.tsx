import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Data Dashboard
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 flex flex-col h-[650px]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Posts
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                {posts?.length ?? 0}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin">
              {posts === null ? (
                <div className="flex items-center justify-center h-full text-slate-400">
                  Loading posts...
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4.5 rounded-xl bg-slate-50/50 hover:bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all duration-250 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-3xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-650 tracking-wide uppercase">
                          Post #{post.id}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {post.body}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Todos Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 flex flex-col h-[650px]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Todos
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                {todos?.length ?? 0}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin">
              {todos === null ? (
                <div className="flex items-center justify-center h-full text-slate-400">
                  Loading todos...
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 border-slate-100 hover:border-emerald-100 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Checkbox Indicator */}
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-all duration-150 ${
                        todo.completed
                          ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                          : "bg-white border-slate-200 text-transparent"
                      }`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium transition-all duration-150 truncate ${
                        todo.completed ? "text-slate-400 line-through" : "text-slate-700"
                      }`}>
                        {todo.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-3xs font-mono text-slate-450 text-slate-400">#{todo.id}</span>
                      <span className={`text-3xs font-semibold px-2 py-0.5 rounded tracking-wide uppercase ${
                        todo.completed
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}>
                        {todo.completed ? "Done" : "Todo"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Users Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 flex flex-col h-[650px]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
                Users
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700">
                {users?.length ?? 0}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin">
              {users === null ? (
                <div className="flex items-center justify-center h-full text-slate-400">
                  Loading users...
                </div>
              ) : (
                users.map((user) => (
                  <div
                    key={user.id}
                    className="p-5 rounded-xl border transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 border-slate-100 hover:border-pink-100 hover:shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      {/* Profile Header */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-450 flex items-center justify-center text-white text-sm font-bold shrink-0 bg-pink-500 shadow-xs">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 leading-tight">
                            {user.name}
                          </h3>
                          <span className="text-3xs text-slate-400 font-mono">ID: {user.id}</span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-4 text-xs text-slate-655 text-slate-500">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="truncate text-slate-600" title={user.email}>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.305a12.937 12.937 0 005.07 5.07l1.305-1.305a1.1 1.1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="truncate text-slate-600">{user.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-pink-600 hover:text-pink-700 hover:underline truncate font-medium"
                          >
                            {user.website}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Company info footer */}
                    <div className="border-t border-slate-100 pt-3.5 mt-auto">
                      <span className="text-3xs font-mono text-slate-400 uppercase tracking-wider block mb-0.5">Company</span>
                      <span className="text-xs font-semibold text-slate-800 block truncate">{user.company?.name}</span>
                      <p className="text-3xs text-slate-500 italic mt-0.5 line-clamp-1">"{user.company?.catchPhrase}"</p>
                      <span className="inline-block mt-2 text-3xs font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                        {user.company?.bs}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
