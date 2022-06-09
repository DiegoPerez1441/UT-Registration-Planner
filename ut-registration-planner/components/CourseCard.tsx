import React, { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

import styles from "./CourseCard.module.scss"

interface CourseDateTimeObj {
    regular: {
        days: string
        hour: string
        room: string
    }
    additional?: {
        days: string
        hour: string
        room: string
    }
}

interface Course {
    name: string
    fullName: string
    instructor: string[]
    uid: number
    status: string
    time: CourseDateTimeObj
}

interface CourseCardProps {
    course: Course
}

const truncate = (str: string, n: number): string => {
    return (str.length > n) ? str.substring(0, n - 1) + "..." : str
}

const CourseCard = ({ course }: CourseCardProps) => {

    const [instructorsText, setInstructorsText] = useState("")

    useEffect(() => {
        if (course.instructor.length > 1) {
            setInstructorsText(`${course.instructor[0]} and ${course.instructor[1]}`)
        } else if (course.instructor.length == 1) {
            setInstructorsText(course.instructor[0])
        }
    }, [])

    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.h2}>
                    {truncate(course.name + " - " + instructorsText, 25)}
                </h2>
                <p className={styles.p}>{course.uid}</p>
            </div>
            <ContentCopyIcon />
        </Paper>
    )
}

export default CourseCard
