import { useEffect, useState } from "react";
import { ListItems } from "./components/ListItems";
import { TodoItem } from "./components/TodoItem";
import { UserItem } from "./components/UserItem";
import { Header } from "./components/Header";
import { TodoFilter } from "./components/TodoFilter";

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

export interface User {
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
        <Header text={<p>Same information....</p>}>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Data Dashboard
          </h1>
        </Header>

        {todos && (
          <TodoFilter todos={todos}>
            {(filteredTodos) => (
              <ListItems
                renderTitle={() => (
                  <h2 className="text-green-600 text-center mb-4 text-5xl">
                    Список Todos
                  </h2>
                )}
                items={filteredTodos}
                renderItem={(item) => (
                  <TodoItem
                    main={
                      <div className="text-2xl text-green-700">
                        {item.title} - {item.id}
                      </div>
                    }
                  />
                )}
              />
            )}
          </TodoFilter>
        )}

        {users && (
          <ListItems
            renderTitle={() => (
              <h2 className="text-blue-600 text-center mb-4 text-4xl">
                Список Users
              </h2>
            )}
            items={users}
            renderItem={(item) => <UserItem item={item} />}
          />
        )}
      </div>
    </div>
  );
}

export default App;
