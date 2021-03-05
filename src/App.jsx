import "./App.css";
import { useState } from "react";
import Todos from "./Todo";
import Main from "./Main";

const App = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    hasCompleted: false,
  });

  const [todos, setTodos] = useState([
    {
      id: 4,
      title: "Hello World ",
      hasCompleted: false,
    },

    {
      id: 8,
      title: "Jai Shree Ram ",
      hasCompleted: false,
    },

    {
      id: 87,
      title: "Jai Hind",
      hasCompleted: false,
    },
  ]);

  const handleRemove = (e) => {
    const { id } = e.target;
    setTodos(todos.filter((todo) => todo.id !== +id));
  };

  const handleComplete = async (e) => {
    const { id } = e.target;

    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === +id ? { ...todo, hasCompleted: !todo.hasCompleted } : todo
      )
    );
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setTodo({ hasCompleted: false, title: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { ...todo, id: Math.floor(Math.random() * 100) }]);
    e.target[0].value = "";
  };

  return (
    <div className="container">
      <header>
        <h4>Todo List Using React </h4>
      </header>
      <Main handleSubmit={handleSubmit} handleInput={handleInput} />
      <Todos
        todos={todos}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default App;
