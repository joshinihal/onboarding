import classes from "./StepTwo.module.css";

const StepTwo = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNext();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="workspaceName">
          Workspace Name
        </label>
        <input required
          className="input-box"
          id="workspaceName"
          placeholder="Eden"
          type="text"
        ></input>
        <label className="input-label" htmlFor="workspaceUrl">
          Workspace URL <span className={classes.optional}>(optional)</span>
        </label>
        <div className={classes["url-container"]}>
          <div className={classes.prefix}>www.eden.com/</div>
          <input
            className={`input-box ${classes["url-input"]}`}
            id="workspaceUrl"
            placeholder="Example"
            type="text"
          ></input>
        </div>
        <button className="btn purple" type="Submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default StepTwo;
