import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import styles from "./Header.module.scss"

type Props = {}

const Header = (props: Props) => {
    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.h2}>
                    Hours: 8
                </h2>
            </div>
        </Paper>
    )
}

export default Header
