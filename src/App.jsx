// import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="container">
      <header>
        <h4>Todo List Using React </h4>
      </header>
      <div className="todos">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default App;
