const Todo = ({ todos, handleComplete, handleRemove }) => {
  return (
    <div className="todos">
      {todos.map(({ title, id }, index) => (
        <div key={index} className="todo flex">
          <p>
            <span>{index + 1}</span>&nbsp;&nbsp;{title}
          </p>

          <div className="buttons">
            <i
              onClick={handleComplete}
              id={id}
              className="fas fa-check fa-1x"
            ></i>
            <i
              onClick={handleRemove}
              id={id}
              className="fas fa-times fa-1x"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
