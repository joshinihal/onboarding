const StepOne = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNext();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="fullname">
          Full Name
        </label>
        <input
          required
          className="input-box"
          id="fullname"
          placeholder="Steve Jobs"
          type="text"
        ></input>
        <label className="input-label" htmlFor="displayname">
          Display Name
        </label>
        <input
          required
          className="input-box"
          id="displayname"
          placeholder="Steve"
          type="text"
        ></input>
        <button className="btn purple" type="Submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default StepOne;
