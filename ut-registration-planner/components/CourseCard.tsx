import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import styles from "./CourseCard.module.scss"

import { getStorage, setStorage } from "../utils/chromeStorage"

// Reused
interface Course {
    name: string
    professor: string
    uid: string
}

interface CourseCardProps {
    course: Course
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
            <ContentCopyIcon onClick={async () => {
                // try {
                //     await setStorage({ storageTestItem: `Hello World from Chrome Storage. Key: ${course.name}`})
                // } catch (error) {
                //     console.warn(error)
                // }
            }}/>
        </Paper>
    )
}

export default CourseCard
