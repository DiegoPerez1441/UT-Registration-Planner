import React from "react"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"

import styles from "./QuickActionButton.module.scss"

interface QuickActionButtonProps {
    tooltip: any
    children?: any
}

const QuickActionButton = ({ tooltip, children }: QuickActionButtonProps) => {
    return (
        <Tooltip title={tooltip}>
            <Button className={styles.button}>
                {children}
            </Button>
        </Tooltip>
    )
}

export default QuickActionButton
