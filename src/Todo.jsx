const Todo = () => {
  return (
    <div className="todo flex">
      <p>
        <span>1.</span>&nbsp;&nbsp;Something to do
      </p>
      <div className="buttons">
        <i className="fas fa-check fa-1x"></i>
        <i className="fas fa-times fa-1x"></i>
      </div>
    </div>
  );
};

export default Todo;
