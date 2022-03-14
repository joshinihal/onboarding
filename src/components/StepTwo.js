import { useState } from "react";

import classes from "./StepTwo.module.css";

const StepTwo = (props) => {

  const [workSpaceName, setWorkSpaceName] = useState(props.userState.userDetails.workSpaceName);
  const [workSpaceUrl, setWorkSpaceUrl] = useState(props.userState.userDetails.workSpaceUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = {...props.userState.userDetails, workSpaceName, workSpaceUrl};
    props.onUserDataChange(newState);
    props.onNext();
  };

  const handleWorkSpaceNameChange = (e) => {
    setWorkSpaceName(e.target.value);
  };

  const handleWorkSpaceUrlChange = (e) => {
    setWorkSpaceUrl(e.target.value);
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
          value={workSpaceName}
          onChange={handleWorkSpaceNameChange}
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
            value={workSpaceUrl}
          onChange={handleWorkSpaceUrlChange}
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
