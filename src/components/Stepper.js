import React from "react";
import classes from "./Stepper.module.css";

const Stepper = (props) => {
  const steps = [...Array(props.size ? props.size : 0)];

  const stepper = steps.map((e, i) => (
    <React.Fragment key={i}>
      <div
        className={`${i <= props.current ? "purple" : classes["step-border"]} ${classes["step"]}`}
      >
        {i + 1}
      </div>
        {i < props.size-1 ? <div className={`${classes["connector"]} ${i < props.current ? 'purple' : ''}`}></div>:''}
    </React.Fragment>
  ));

  return <div className={`${classes["stepper-container"]}`}>{stepper}</div>;
};

export default Stepper;
