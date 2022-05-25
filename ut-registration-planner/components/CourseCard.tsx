import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import styles from "./CourseCard.module.scss"

type Props = {}

const CourseCard = (props: Props) => {
    return (
        <Paper elevation={4} className={styles.container}>
            <h2 className={styles.h2}>UT 101 - Example Professor</h2>
            <p className={styles.p}>10234</p>
        </Paper>
    )
}

export default CourseCard