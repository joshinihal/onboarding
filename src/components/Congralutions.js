import classes from "./Congratulations.module.css";

const Congratulations = () => {
  return (
    <div>
      <span className={`material-icons ${classes.icon}`}>check</span>
      <h2>Congratulations, Eren!</h2>
      <p className="subheading">
        You have completed onboarding, you can start using Eden!
      </p>
      <form className="form">
        <button className="btn purple" type="Submit">
          Launch Eden
        </button>
      </form>
    </div>
  );
};

export default Congratulations;
