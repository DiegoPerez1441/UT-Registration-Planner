import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import React, { useState, useEffect } from 'react';

import Header from "../components/Header"
import CourseCard from "../components/CourseCard"
import QuickActionsBar from "../components/QuickActionsBar"

import { getStorage, setStorage } from "../utils/chromeStorage"

const Home: NextPage = () => {

    const [userCourseList, setUserCourseList] = useState([])

    useEffect(() => {

        const getUserCourseList = async () => {
            try {
                const l_userCourseList = await getStorage("userCourseList")
                setUserCourseList(l_userCourseList)
                // console.log(userCourseList)
            } catch (error) {
                console.warn(error)
            }
        }

        getUserCourseList()

    })

    return (
        <div className={styles.container}>
            {/* <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <Header />

            <div className={styles.courseCardsContainer}>
                {userCourseList.map((course, index) => {
                    return <CourseCard key={index} course={course} />
                })}
            </div>

            <QuickActionsBar />

        </div>
    )
}

export default Home
