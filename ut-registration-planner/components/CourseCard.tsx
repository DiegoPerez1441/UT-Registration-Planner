import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import styles from "./CourseCard.module.scss"

import { getStorage, setStorage } from "../utils/chromeStorage"

// Reused
interface Course {
    name: string,
    fullName: string,
    instructor: string,
    uid: number,
    status: string,
    // time: time
}

interface CourseCardProps {
    course: Course
}

const truncate = (str: string, n: number): string => {
    return (str.length > n) ? str.substring(0, n - 1) + "..." : str
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                {/* <h2 className={styles.h2}>UT 101 - Example Professor</h2> */}
                <h2 className={styles.h2}>
                    {truncate(course.name + " - " + course.instructor, 25)}
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
