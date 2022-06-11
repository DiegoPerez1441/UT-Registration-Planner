import React, { useState, useEffect } from 'react'
import Paper from "@mui/material/Paper"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const [courseCardExpanded, setCourseCardExpanded] = useState(false)

    useEffect(() => {
        if (course.instructor.length > 1) {
            setInstructorsText(`${course.instructor[0]} and ${course.instructor[1]}`)
        } else if (course.instructor.length == 1) {
            setInstructorsText(course.instructor[0])
        }
    }, [])

    const handleCourseCardOnClick = () => {
        setCourseCardExpanded(!courseCardExpanded)
    }

    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.summaryViewContainer}>
                <ContentCopyIcon className={styles.contentCopyIcon}/>
                <div className={styles.textContainer}>
                    <h2 className={styles.h2}>
                        {truncate(course.name + " - " + instructorsText, 25)}
                    </h2>
                    <p className={styles.p}>{course.uid}</p>
                </div>
                <ExpandMoreIcon className={courseCardExpanded ? styles.expandMoreIconExpanded : styles.expandMoreIconCollapsed} onClick={handleCourseCardOnClick}/>
            </div>

            {courseCardExpanded && (
                <div className={styles.expandedViewContainer}>
                    <p className={styles.p}>{course.status}</p>
                    <p className={styles.p}>{`${course.time.regular.days} | ${course.time.regular.hour} | ${course.time.regular.room}`}</p>
                    {/* <p className={styles.p}>{`${course.time.regular.days} | ${course.time.regular.hour} | ${course.time.regular.room}`}</p> */}
                </div>
            )}
        </Paper>
    )
}

export default CourseCard
