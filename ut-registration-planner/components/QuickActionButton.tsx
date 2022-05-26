import React from 'react'
import Button from "@mui/material/Button"

import styles from "./QuickActionButton.module.scss"

interface QuickActionButtonProps {
    props?: any
    children?: any
}

const QuickActionButton = (props: QuickActionButtonProps) => {
    return (
        <Button className={styles.button}>
            {props.children}
        </Button>
    )
}

export default QuickActionButton