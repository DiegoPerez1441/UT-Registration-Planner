import React from 'react'
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"

import styles from "./FloatingActionButton.module.scss"

interface Props {
    tooltip: any
    children?: any
}

const FloatingActionButton = ({ tooltip, children }: Props) => {
    return (
        <Tooltip title={tooltip}>
            <Button className={styles.button}>
                {children}
            </Button>
        </Tooltip>
    )
}

export default FloatingActionButton