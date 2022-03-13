import classes from "./StepThree.module.css";

const StepThree = () => {
  return (
    <div>
      <h2>How are you planning to use Eden?</h2>
      <p className="subheading">
        We'll streamline your setup experience accordingly.
      </p>
      <form className="form">
        <div className={classes["plans-container"]}>
          <div className={classes["plan"]}>
            <span className={`material-icons ${classes.icon}`}>person</span>
            For Myself
            <p>Write better. Think more clearly. Stay organized.</p>
          </div>
          <div className={classes["plan"]}>
            <span className={`material-icons ${classes.icon}`}>groups</span>
            With my team
            <p>Wikis, docs, tasks & projects all in one place.</p>
          </div>
        </div>
        <button className="btn purple" type="Submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default StepThree;
