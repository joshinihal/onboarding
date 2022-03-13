import classes from "./StepTwo.module.css";

const StepTwo = () => {
  return (
    <div>
      <h2>Let's set up a home for all your work</h2>
      <p className="subheading">
        You can always create another workspace later.
      </p>

      <form className="form">
        <label className="input-label" htmlFor="workspaceName">
          Workspace Name
        </label>
        <input
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
