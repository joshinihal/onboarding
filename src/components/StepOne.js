const StepOne = () => {
  return (
    <div>
      <h2>Welcome! First things first...</h2>
      <p className="subheading">You can always change them later.</p>
      <form className="form">
        <label className="input-label" htmlFor="fullname">
          Full Name
        </label>
        <input
          className="input-box"
          id="fullname"
          placeholder="Steve Jobs"
          type="text"
        ></input>
        <label className="input-label" htmlFor="displayname">
          Display Name
        </label>
        <input
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
