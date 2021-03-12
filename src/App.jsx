import "./App.css";
import { useState, useEffect } from "react";
import Todos from "./Todo";
import Main from "./Main";
import Alert from "./Alert";

// Fetching Todos from Local Storage(Chrome Browser's)
const getTodosFromLocalStorage = () => {
  if (
    localStorage.getItem("todos") !== null &&
    localStorage.getItem("todos") !== undefined
  ) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const App = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    hasCompleted: false,
  });

  const [alert, setAlert] = useState({ show: false, msg: "", styleClass: "" });

  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [toEditTodoId, setToEditTodoId] = useState(null);

  // Saving Todos in Local Storage whenever todos array changes
  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [
    todos,
  ]);

  // Shows Alert Message
  const showAlert = (message, classToAdd) => {
    setAlert({ show: true, msg: message, styleClass: classToAdd });
  };

  // Edit A Todo
  const handleEdit = (e) => {
    const { id } = e.target;

    setIsEditing(true);
    setToEditTodoId(+id);
    todos.map((item) => (item.id === +id ? (todo.title = item.title) : ""));
  };

  // Remove A Todo
  const handleRemove = (e) => {
    const { id } = e.target;
    setTodos(todos.filter((todo) => todo.id !== +id));
    showAlert("Successfully Deleted a todo !!", "success");
  };

  // Toggleing hasCompleted
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

  // Handling input
  const handleInput = (e) => {
    const { value } = e.target;
    setTodo({ hasCompleted: false, title: value });
  };

  // Saving or updating  todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.title !== "" && todo.title !== null && isEditing) {
      setTodos(
        todos.map((item) => {
          if (item.id === toEditTodoId) {
            setTodo({ ...todo, title: "" });
            return { ...item, title: todo.title };
          } else {
            return item;
          }
        })
      );

      setTodo({
        id: 0,
        title: "",
        hasCompleted: false,
      });
      showAlert("Successfully Updated a todo !!", "success");

      setIsEditing(false);
      setToEditTodoId(null);
    } else if (todo.title !== "" && todo.title !== null) {
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
      {alert.show ? <Alert setAlert={setAlert} alert={alert} /> : ""}

      <Todos
        todos={todos}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />

      <button
        className="clear"
        onClick={() => {
          setTodos([]);
          showAlert("Deleted All the todos!!", "success");
        }}
      >
        Remove All
      </button>
    </div>
  );
};

export default App;
