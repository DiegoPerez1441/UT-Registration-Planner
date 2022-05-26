import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import CourseCard from "../components/CourseCard"

interface CourseList {
    name: string
    professor: string
    uid: string
}

const courseList: CourseList[] = [
    {
        name: "UT 101",
        professor: "Example Professor",
        uid: "00101",
    },
    {
        name: "CH 301",
        professor: "Example Professor",
        uid: "00301",
    },
    {
        name: "LA 101",
        professor: "Example Professor",
        uid: "00101",
    },
    {
        name: "C S 312",
        professor: "Example Professor",
        uid: "00312",
    },
]

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {courseList.map((course, index) => {
                return <CourseCard key={index} course={course} />
            })}
        </div>
    )
}

export default Home
