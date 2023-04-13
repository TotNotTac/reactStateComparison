import { useMachine } from "@xstate/react";
import React from "react";
import { createMachine } from "xstate";

const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAjADYAHDgCcAdhWy1AJi4BWbXpWKALGoA0IAJ5yTKnCZPa1srvPkbZu7QF8fltAxsHFJyKjomVk5eSSERMQkkaTklVU8dfUNjM0sbBEVZB08PWRUAZllKrz9-EAJUCDhJQKwwWOFRPHFJGQQAWnlcxAG-APRW-GIySjakuM7upN6nIfy1HD0zNRMy7V2uOx3RkBbg0Jn2+K7E0F7tcpw9+RUVbWcuLhc1C2tEFS4cAdvjs9rpDmUaj4gA */
  id: "toggle",
  initial: "inactive",
  schema: {
    events: {} as { type: "TOGGLE"},
  }, 
  tsTypes: {} as import("./Toggler.typegen").Typegen0,
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});

export const StateMachineToggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send("TOGGLE")}>{state.value.toString()}</button>
  );
};