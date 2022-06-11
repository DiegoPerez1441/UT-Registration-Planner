import React, { useState, useEffect } from 'react'
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import styles from "./Header.module.scss"

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

interface Props {
    courseList: Course[]
}

const Header = ({ courseList }: Props) => {
    const [totalCourses, setTotalCourses] = useState(0)

    useEffect(() => {
        setTotalCourses(courseList.length)
    }, [courseList])
    

    return (
        <Paper elevation={4} className={styles.container}>
            <div className={styles.textContainer}>
                {/* <h2 className={styles.h2}>{`Fall 2022 Courses: 4`}</h2> */}
                <h2 className={styles.h2}>{`Hours: ${totalCourses}`}</h2>
            </div>
        </Paper>
    )
}

export default Header
