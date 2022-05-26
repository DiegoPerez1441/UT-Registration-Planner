import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import styles from "./CourseCard.module.scss"

// Reused
interface CourseList {
    name: string
    professor: string
    uid: string
}

interface CourseCardProps {
    course: CourseList
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                {/* <h2 className={styles.h2}>UT 101 - Example Professor</h2> */}
                <h2 className={styles.h2}>
                    {course.name + " - " + course.professor}
                </h2>
                <p className={styles.p}>{course.uid}</p>
            </div>
            <ContentCopyIcon />
        </Paper>
    )
}

export default CourseCard
