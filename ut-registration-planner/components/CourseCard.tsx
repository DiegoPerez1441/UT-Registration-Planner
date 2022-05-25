import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import styles from "./CourseCard.module.scss"

type Props = {}

const CourseCard = (props: Props) => {
    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.h2}>UT 101 - Example Professor</h2>
                <p className={styles.p}>10234</p>
            </div>
            <ContentCopyIcon className={styles.icon}/>
        </Paper>
    )
}

export default CourseCard