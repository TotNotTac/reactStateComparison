import React, { useState } from "react";
import { FC } from "react";
import { ConformationDialogue } from "../conformationDialogue";

export const StateConformationBox: FC = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [conformationDialogueShowing, setConformationDialogueShowing] = useState(false);

    return <div>
        <div>
            <button onClick={()=>{
                setConfirmed(false);
                setConformationDialogueShowing(false)
            }}>Reset</button>
        </div>

        {conformationDialogueShowing && !confirmed && <ConformationDialogue onConfirm={()=>setConfirmed(true)} onCancel={()=>setConformationDialogueShowing(false)}/>}
    </div>
}
