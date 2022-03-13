import classes from "./Congratulations.module.css";

const Congratulations = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onNext();
  };

  return (
    <div>
      <span className={`material-icons ${classes.icon}`}>check</span>
      <form className="form" onSubmit={handleSubmit}>
        <button className="btn purple" type="Submit">
          Launch Eden
        </button>
      </form>
    </div>
  );
};

export default Congratulations;
