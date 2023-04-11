import React, { useState } from "react";

type ToggleValue = "active" | "inactive";

export const StateToggler = () => {
  const [isToggled, setIsToggled] = useState<ToggleValue>("inactive");
  const toggle = () =>
    setIsToggled((v) => (v === "active" ? "inactive" : "active"));

  return <button onClick={toggle}>{isToggled.toString()}</button>;
};
