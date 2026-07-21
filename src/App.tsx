import { useEffect, useState } from "react";
import { ListItems } from "./components/ListItems";

interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Todo {
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

        <ListItems
          title="Список Todo"
          items={todos}
          renderItem={(item) => (
            <div
              className="p-3 bg-blue-300 border-2 flex gap-3 items-center"
              key={item.id}
            >
              <p className="text-2xl text-red-700">{item.id}</p>
              <p>{item.title}</p>
            </div>
          )}
        />

        <ListItems
          title="Список Users"
          items={users}
          renderItem={(item) => (
            <div className="p-3 bg-green-300 border-2" key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default App;
