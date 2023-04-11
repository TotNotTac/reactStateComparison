import React, { ReducerAction, useReducer } from "react";

type ToggleReducerAction = "TOGGLE";
type ToggleState = "active" | "inactive";

const toggleReducer = (state: ToggleState, _action: ToggleReducerAction) => {
  switch (state) {
    case "active":
      return "inactive";
    case "inactive":
      return "active";
  }
};

export const ReducerToggler = () => {
  const [state, dispatch] = useReducer(toggleReducer, "inactive");

  return <button onClick={() => dispatch("TOGGLE")}>{state.toString()}</button>;
};
