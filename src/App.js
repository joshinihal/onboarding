import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import Congratulations from "./components/Congralutions";
import Error from "./components/Error";
import Stepper from "./components/Stepper";

import { userActions } from './store/user';

function App() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userState = useSelector((state) => {
    console.log('state',state)
    return state.user;
  });

  // get event from child components
  // if it is the last route, go back to the first
  // else move ahead
  const handleNext = () => {
    if (currentRoute === routes.length-1){
      navigate(routes[0].route);
    } else {
      navigate(routes[currentRoute+1].route);
    }
  }

  const handleUserDataChange = (user) => {
    dispatch(userActions.addUserDetails(user));
  }

  const routes = [
    {
      name: "Step One",
      title: "Welcome! First things first...",
      subtitle: "You can always change them later.",
      component: <StepOne onUserDataChange={handleUserDataChange} userState={userState} onNext={handleNext} />,
      route: "/stepone",
    },
    {
      name: "Step Two",
      title: "Let's set up a home for all your work",
      subtitle: "You can always create another workspace later.",
      component: <StepTwo onUserDataChange={handleUserDataChange} userState={userState} onNext={handleNext}/>,
      route: "/steptwo",
    },
    {
      name: "Step Three",
      title: "How are you planning to use Eden?",
      subtitle: "We'll streamline your setup experience accordingly.",
      component: <StepThree onUserDataChange={handleUserDataChange} userState={userState} onNext={handleNext}/>,
      route: "/stepthree",
    },
    {
      name: "Congratulations",
      title: `Congratulations, ${userState.userDetails.fullName}!`,
      subtitle: "You have completed onboarding, you can start using Eden!",
      component: <Congratulations />,
      route: "/congratulations",
    },
    {
      name: "Error",
      title: null,
      subtitle: null,
      component: <Error error="404: URL Not Found!" />,
      route: "/notfound",
    },
  ];

  const [currentRoute, setCurrentRoute] = useState(0);

  const location = useLocation();

  // set current route from array whenever route changes
  useEffect(() => {
    const currPath = location.pathname;
    const routeInd = routes.findIndex((e) => e.route === currPath);
    if (routeInd !== -1) {
      setCurrentRoute(routeInd);
    }
  }, [location]);

  

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Stepper current={currentRoute} size={routes.length-1} />
      <h2>{routes[currentRoute].title}</h2>
      <p className="subheading">{routes[currentRoute].subtitle}</p>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/stepone" />} />
          {routes.map((each) => (
            <Route key={each.name} path={each.route} element={each.component} />
          ))}
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
