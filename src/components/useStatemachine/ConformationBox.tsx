import { useMachine } from "@xstate/react";
import { FC } from "react";
import { assign, createMachine } from "xstate";
import { ConformationDialogue } from "../conformationDialogue/";

const conformationMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2A7AZqgTgWwEMAXASwwGIc4wiBtABgF1FQAHVWE0jFkAD0QBGAKzCAdADYA7ABYZUgMwAmEYIlKAnAA4ANCACeiGWI1Kl9LfQ0bB9YUqn2Avk71osuQt3RiAFiQgIMHRyWF9UAHcAERICABtUKABXMAZmJBB2Tm9eAQQlCQ0xGSsSu1tlKQK9QwQtKTFhDQkFUSspehlCpRc3DGx8YjIfMMiSdChyd0wSfDTeLK5h3MRhKQaC7XopCXqO3QNEesbm1o1hC2btqV6Qac8hjDFRiPHJ5AJ0ZDA4+YzFnIZPIKQQKMT0AoSUGCQTnUFKBQ1RAqYpaGQKVpo4QKKSCLouVwgdCoILwDL3QaAtgcJY8IGIDTGZRaQRKYRIhAAWi0Skaaws9mEaNhiluFK8wz8ASC6AWNKp-CEMl5zNZ7MOdQaQoxOt1GJkYv6D28z3Crwmcuyy3pCHR4noILZHI09HBWj1HoNhPFjx801meEgltpsptwnUYh2JTZ522PMEHJhxVjSi0axa9hZEgJTiAA */
    id: "conformation",
    tsTypes: {} as import("./ConformationBox.typegen").Typegen0,
    schema: {
        events: {} as 
            | { type: "showDialogue" }
            | { type: "confirm" }
            | { type: "reset" }
            | { type: "cancel"},
    },
    initial: "hidden",
    states: {
        "hidden": {
            on: { showDialogue: "showing"}
         },
        "showing": { 
            on: {
                confirm: "confirmed",
                cancel: "hidden"
            },
        },
        "confirmed": {}
    },
    on: {
        reset: ".hidden"
    }
})

export const StateMachineConformationBox: FC = () => {
    const [state, send] = useMachine(conformationMachine)

    return <div>
        <div>
            <button disabled={!state.can("showDialogue")} onClick={()=>send("showDialogue")}>Show</button>
            <button onClick={()=>send("reset")}>Reset</button>
        </div>

        {state.matches("showing") && <ConformationDialogue onConfirm={()=>send("confirm")} onCancel={()=>send("cancel")} />}
    </div>
}
