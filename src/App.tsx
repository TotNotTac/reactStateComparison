import "./App.css";
import { StateToggler } from "./components/useState/Toggler";
import { ReducerToggler } from "./components/useReducer/Toggler";
import { StateMachineToggler } from "./components/useStatemachine/Toggler";
import { StateConformationBox } from "./components/useState/ConformationBox";
import { ReducerConformationBox } from "./components/useReducer/ConformationBox";
import { StateMachineConformationBox } from "./components/useStatemachine/ConformationBox";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { FC, useMemo } from "react";

const appMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqCyyDGALAlgHZgDEsuA9gO4CqsYAygC7JNgDaADALqKioVY+JvgqE+IAB6IAjAFYATADoA7AA4AzCoUqZMgGwGVAFg0AaEAE9Z6pcbkq5ATlP3Da-QoC+Xi2kw4BMRklLT0AEqQAK7YYABOXLxIIAJCImIS0ggqnJxKThpaasa5Gk76nCoW1ggytvaOLhoGaq36cj5+6Fh4RKTk1HRgPUEcPBKpwqLiyVkyGgpqSgr6zZXqnGp6VVY2Sw1y7dpqTmq5+p0g-iN9SlH0zKxgSkwUUFAANvFkVMJ4iRNBFMMrNZFs7Ft2hpDHJjAoCjsanDlPpNDInOV7AoNJxypdroFbvdGCw2EpsGIAGYUOIAW1Y0x+f1wAOSk3SM1Ac00di02IU6Kc6gUxmM1UQGkUSmKixknDkJzkZQ6viu3UJxDuEWisTiLzen2+sF+TH+4zZQI5mUQjmUcgVuVF8xcenFCGRSlRCxxig8Og8+PVvU1xMiEBi8XJVJp9I5TNNLPN-Et02t2Sl9rOnCdZWMMjdkqcqgcjiVJjkuOMgYCweexJumte7y+cXjZqSybSqdBtQ0xn0SnlFTkBmhkrUcjdHq9gv0WJxTmrDbr9GXUcI1LpDLEbcTHZSKZBXNkfYHQ-lo9WCsREoqSmccpypgUQ7UPlVhAoEDgEgJtcBXZHlIiAALTFKoKieKcLgbNi5i7AgTh5EKxTZosGhnAoKpdDWoxaiSTwAcCnLAQgIHQhBUEnMYsGFG6KxyEoY5zk4MiitC6JVqqf54cSjxkk2hpxERVo9noyzYjkcqKOikH6E4BYKvkegYUKkGNN43FBrxDyks8FIbjG24key3bHgghRFsUkq5NinALEOBaGHYKlnFsuiOFxOFrqGOrxCJZmkbCSzZqKc6FKiAoKQhOjKAxhwGCxbGLlpuFEtq4a6vqzb+RagEkVkzhnqK-amNCahRYpRYmDR2J6LkThYUuGormAYYRnqBmbrGgWmUBWSsUW+hzos7RKmoJg3hZd4OGcNHGJoMqcBcqU+auLUBf1sjzAOzQyCs8msSV0U1DoGhKHo6KbKcqIqI1K3eS1+FroJLabQV23gXtB0YmxoonbeKj5JB9j7SKLiLM1tbPU9XVGaJnbEWm8iVPkawnC+xRqU5SxnGp9o3Y1XE+EAA */
  tsTypes:{} as import("./App.typegen").Typegen0,

  id: 'appMachine',

  states: {
    useState: {
      states: {
        toggler: {
          on: {
            switch: "conformation"
          }
        },
        conformation: {
          on: {
            switch: "toggler"
          }
        }
      },

      initial: "toggler"
    },

    useReducer: {
      states: {
        toggler: {
          on: {
            switch: "conformation"
          }
        },
        conformation: {
          on: {
            switch: "toggler"
          }
        }
      },

      initial: "toggler"
    },

    useMachine: {
      states: {
        toggler: {
          on: {
            switch: "conformation"
          }
        },
        conformation: {
          on: {
            switch: "toggler"
          }
        }
      },

      initial: "toggler"
    }
  },

  initial: "useState",

  on: {
    showUseState: ".useState",
    showUseReducer: ".useReducer",
    showUseMachine: ".useMachine"
  }
})

export const App = () => {
  const [state, send] = useMachine(appMachine)

  const CurrentTab: FC = useMemo(() => () => {
    console.count("renders")
    if (state.matches('useMachine.toggler')) return <StateMachineToggler />
    if (state.matches('useMachine.conformation')) return <StateMachineConformationBox />
    if (state.matches('useReducer.toggler')) return <ReducerToggler />
    if (state.matches('useReducer.conformation')) return <ReducerConformationBox />
    if (state.matches('useState.toggler')) return <StateToggler />
    if (state.matches('useState.conformation')) return <StateConformationBox />
    return <>Error</>
  }, [state])

  return (
    <div className="App">
    <div className="switcher">
      <button disabled={state.matches('useState')} onClick={()=>send('showUseState')}>state</button>
      <button disabled={state.matches('useReducer')} onClick={()=>send('showUseReducer')}>reducer</button>
      <button disabled={state.matches('useMachine')} onClick={()=>send('showUseMachine')}>machine</button>
      <button onClick={()=>send('switch')}>Switch</button>
    </div>
      <div className="card">
        <CurrentTab />
      </div>
    </div>
  );
};
