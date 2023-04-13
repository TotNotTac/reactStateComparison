import React from "react";
import { FC } from "react";
import styles from './styles.module.css'

export const ConformationDialogue: FC<{onConfirm?: () => void; onCancel?: () => void}> = ({ onConfirm, onCancel }) => {
    return <div className={styles.backdrop}>
        <div className={styles.container}>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </div>;
};