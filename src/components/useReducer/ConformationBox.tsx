import React, { useReducer, useState } from "react";
import { FC } from "react";
import { ConformationDialogue } from "../ConformationDialogue";

type ConformationAction = "showDialogue" | "hideDialogue" | "confirm" | "reset"
type ConformationState = "showing" | "hidden" | "confirmed"

const conformationBoxReducer = (state: ConformationState, action: ConformationAction): ConformationState => {
    return (state === "hidden" && action === "showDialogue") ? "showing" :
           (state === "showing" && action === "confirm") ? "confirmed" :
           (state === "confirmed" && action === "reset") ? "hidden"
            : "hidden" // Default value
}

export const ReducerConformationBox: FC = () => {
    const [state, dispatch] = useReducer(conformationBoxReducer, "hidden");

    return <div>
        <div>
            <button disabled={state === "confirmed"} onClick={()=>dispatch("showDialogue")}>Show</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>

        {state === "showing" && <ConformationDialogue onConfirm={()=>dispatch("confirm")} />}
    </div>
}
