const Main = ({ handleSubmit, handleInput }) => {
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            onChange={handleInput}
            placeholder="What do you want to do?"
          />
          <input type="submit" />
        </div>
      </form>
    </main>
  );
};

export default Main;
