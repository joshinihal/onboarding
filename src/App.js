import "./App.css";
import Congratulations from "./components/Congralutions";
import Header from "./components/Header";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>Stepper</div>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <Congratulations/>
    </div>
  );
}

export default App;
