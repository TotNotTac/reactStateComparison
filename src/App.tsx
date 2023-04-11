import "./App.css";
import { StateToggler } from "./components/useState/Toggler";
import { ReducerToggler } from "./components/useReducer/Toggler";
import { StateMachineToggler } from "./components/useStatemachine/Toggler";
import { StateConformationBox } from "./components/useState/ConformationBox";
import { ReducerConformationBox } from "./components/useReducer/ConformationBox";
import { StateMachineConformationBox } from "./components/useStatemachine/ConformationBox";

export const App = () => {
  return (
    <div className="App">
      <div className="card">
        <StateToggler />
      </div>
      <div className="card">
        <ReducerToggler />
      </div>
      <div className="card">
        <StateMachineToggler />
      </div>
      <div className="card">
        <StateConformationBox />
      </div>
      <div className="card">
        <ReducerConformationBox />
      </div>
      <div className="card">
        <StateMachineConformationBox />
      </div>
    </div>
  );
};
