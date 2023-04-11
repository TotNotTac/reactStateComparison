import React from "react";
import { FC } from "react";

export const ConformationDialogue: FC<{ onConfirm: () => void; }> = ({ onConfirm }) => {
    return <div>
        <button onClick={onConfirm}>Confirm</button>
    </div>;
};
