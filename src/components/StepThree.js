import { useState, useEffect } from "react";

import classes from "./StepThree.module.css";

const StepThree = (props) => {
  const plans = [
    {
      type: "individual",
      title: "For Myself",
      subtitle: "Write better. Think more clearly. Stay organized.",
      icon: 'person'
    },
    {
      type: "group",
      title: "With my team",
      subtitle: "Wikis, docs, tasks & projects all in one place.",
      icon: 'group'
    },
  ];

  useEffect(()=>{
    const ind = plans.findIndex(el => el.type === props.userState.userDetails.plan);
    if(ind !== -1){
      setSelectedPlan(ind);
    }
  },[])

  const [selectedPlan, setSelectedPlan] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const plan = plans[selectedPlan].type;
    const newState = {...props.userState.userDetails, plan};
    props.onUserDataChange(newState);
    props.onNext();
  };

  const planSelectHandler = (index) => {
    setSelectedPlan(index)
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className={classes["plans-container"]}>
          {plans.map((plan,i) => (
            <div key={i} onClick={() => planSelectHandler(i)} className={` ${i=== selectedPlan? classes["selected-plan"] :''} ${classes["plan"]}`}>
              <span className={`${i=== selectedPlan? classes["selected-icon"] :''} material-icons ${classes.icon}`}>{plan.icon}</span>
              {plan.title}
              <p>{plan.subtitle}</p>
            </div>
          ))}
        </div>
        <button className="btn purple" type="Submit">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default StepThree;
