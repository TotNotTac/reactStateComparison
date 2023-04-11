import { useMachine } from "@xstate/react";
import { FC } from "react";
import { createMachine } from "xstate";
import { ConformationDialogue } from "../ConformationDialogue";

type ConformationEvent =
            | { type: "showDialogue" }
            | { type: "confirm" }
            | { type: "reset" }

type ConformationState = (
    | { value: "hidden"}
    | { value: "showing"}
    | { value: "confirmed"}) 
    & {context: undefined}

const conformationMachine = createMachine<undefined, ConformationEvent, ConformationState >({
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2A7AZqgtgQwBcBLDAOgAsiIIx0BiWc1AdwBEi8AbVKAVzADaABgC6iUAAdUsIsQziQAD0QBGAGwBOUkJ1CVQgCwqAHBoCseswBoQAT0QAmIQ9IOLOt3uN6DAX182aFi4hCTopIwsROhQdEGYRABOOMJiSCBSMnLoCsoIBmZqpADsQgDMKg7FGg7GZirqajb2CE4unh4WJj7+gRjY+Nmk8Uk4kHSJcGAEqQqZsmG5iAbFZq4aasbeZgZCxgZlxQbNiMYqpAYaVxpnxmpqtQ5qvSDxIUORzNGxk7DTs+l5tklggymCSuUVIchGpimUDLCTggVAYXKsPE4zOY7mZiv4AiB0KgaPB0m9BotAdIFvJ0nkALRNOyIelra5XbwbdTGBxGF7k0JkSjUWhzanAunLBxI4zFUhmYxgsoObFlMxPPwEgUfJhfGJirKU0B5MEGCEVaGw+GI5mtZwldwOTHYtS4-n9d5hYb9UaQA00nKShC4tYPLqQ1GbYpIjRCbSKsEqhVqjX43xAA */
    id: "confomation",
    initial: "hidden",
    states: {
        "hidden": {
            on: { showDialogue: "showing"}
         },
        "showing": { 
            on: {
                confirm: "confirmed",
                reset: "hidden"
            }
        },
        "confirmed": {
            on: { reset: "hidden"}
        }
    }
})

export const StateMachineConformationBox: FC = () => {

    const [state, send] = useMachine(conformationMachine)

    return <div>
        <div>
            <button disabled={state.value === "confirmed"} onClick={()=>send("showDialogue")}>Show</button>
            <button onClick={()=>send("reset")}>Reset</button>
        </div>

        {state.value === "showing" && <ConformationDialogue onConfirm={()=>send("confirm")} />}
    </div>
}
