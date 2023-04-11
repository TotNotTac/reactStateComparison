import React, { useState } from "react";
import { FC } from "react";
import { ConformationDialogue } from "../ConformationDialogue";

export const StateConformationBox: FC = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [conformationDialogueShowing, setConformationDialogueShowing] = useState(false);

    return <div>
        <div>
            <button disabled={confirmed} onClick={()=>setConformationDialogueShowing(true)}>Show</button>
            <button onClick={()=>{
                setConfirmed(false);
                setConformationDialogueShowing(false)
            }}>Reset</button>
        </div>

        {conformationDialogueShowing && !confirmed && <ConformationDialogue onConfirm={()=>setConfirmed(true)} />}
    </div>
}
