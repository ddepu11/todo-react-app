import "./App.css";
import { useState } from "react";
import Todos from "./Todo";
import Main from "./Main";
import Alert from "./Alert";

const App = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    hasCompleted: false,
  });
  const [alert, setAlert] = useState({ show: false, msg: "", styleClass: "" });

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const showAlert = (message, classToAdd) => {
    setAlert({ show: true, msg: message, styleClass: classToAdd });
  };

  const handleRemove = (e) => {
    const { id } = e.target;
    setTodos(todos.filter((todo) => todo.id !== +id));
    showAlert("Successfully Deleted a todo !!", "success");
  };

  const handleComplete = async (e) => {
    const { id } = e.target;

    setTodos((previous) =>
      previous.map((todo) => {
        if (todo.id === +id) {
          showAlert(
            todo.hasCompleted ? "Uncompleted!!" : "Completed!!",
            todo.hasCompleted ? "error" : "success"
          );
          return { ...todo, hasCompleted: !todo.hasCompleted };
        } else {
          return todo;
        }
      })
    );
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setTodo({ hasCompleted: false, title: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title !== "" && todo.title !== null) {
      setTodos([...todos, { ...todo, id: Math.floor(Math.random() * 100) }]);
      showAlert("Successfully Added a todo !!", "success");

      e.target[0].value = "";
      setTodo({
        id: 0,
        title: "",
        hasCompleted: false,
      });
    } else {
      showAlert("Input value cant't be empty!!", "error");
    }
  };

  return (
    <div className="container">
      <header>
        <h4>Todo List Using React </h4>
      </header>
      <Main
        handleSubmit={handleSubmit}
        value={todo.title}
        handleInput={handleInput}
      />
      {alert.show ? <Alert {...alert} setAlert={setAlert} /> : ""}

      <Todos
        todos={todos}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default App;
