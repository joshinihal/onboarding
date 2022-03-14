import { useState } from "react";

const StepOne = (props) => {

  const [fullName, setFullName] = useState(props.userState.userDetails.fullName);
  const [displayName, setDisplayName] = useState(props.userState.userDetails.displayName);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = {...props.userState.userDetails, fullName, displayName};
    props.onUserDataChange(newState);
    props.onNext();
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
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
          value={fullName}
          onChange={handleFullNameChange}
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
          value={displayName}
          onChange={handleDisplayNameChange}
        ></input>
        <button className="btn purple" type="Submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default StepOne;
