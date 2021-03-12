const Main = ({ handleSubmit, handleInput, value }) => {
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            value={value}
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
