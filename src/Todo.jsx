const Todo = ({ todos, handleComplete, handleRemove, handleEdit }) => {
  return (
    <div className="todos">
      {todos.length === 0 ? (
        <h6 className="notodos">Sorry! No Todos to Show!!</h6>
      ) : (
        todos.map(({ title, id, hasCompleted }, index) => (
          <div key={index} className="todo flex">
            {hasCompleted ? <span className="line"></span> : ""}
            <p>
              <span>{index + 1}</span>&nbsp;&nbsp;{title}
            </p>
            <div className="buttons">
              <i
                onClick={handleEdit}
                id={id}
                className="fas fa-pencil-alt fa-1x edit"
              ></i>
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
        ))
      )}
    </div>
  );
};

export default Todo;
