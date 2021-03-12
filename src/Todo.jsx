const Todo = ({ todos, handleComplete, handleRemove }) => {
  return (
    <div className="todos">
      {todos.map(({ title, id, hasCompleted }, index) => (
        <div key={index} className="todo flex">
          {hasCompleted ? <span className="line"></span> : ""}
          <p>
            <span>{index + 1}</span>&nbsp;&nbsp;{title}
          </p>
          <div className="buttons">
            <i class="fas fa-pencil-alt fa-1x edit"></i>
            <i
              onClick={handleComplete}
              id={id}
              className="fas fa-check fa-1x completed"
            ></i>
            <i
              onClick={handleRemove}
              id={id}
              className="fas fa-times fa-1x delete"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
