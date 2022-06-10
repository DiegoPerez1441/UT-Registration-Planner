import React from "react"

import FloatingActionButton from "./FloatingActionButton"
import QuickActionButton from "./QuickActionButton"

import SearchIcon from "@mui/icons-material/Search"
// RIS Icon?
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import SchoolIcon from "@mui/icons-material/School"

import styles from "./QuickActionsBar.module.scss"

type Props = {}

const QuickActionsBar = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className="fab">
                <FloatingActionButton tooltip="Search">
                    <SearchIcon />
                </FloatingActionButton>
            </div>
            <div className="iconButtons">
                <QuickActionButton tooltip="Registration Information Sheet">RIS</QuickActionButton>

                <QuickActionButton tooltip="Waitlist">
                    <FormatListNumberedIcon />
                </QuickActionButton>
                
                <QuickActionButton tooltip="Degree Audit">
                    <SchoolIcon />
                </QuickActionButton>
            </div>

        </div>
    )
}

export default QuickActionsBar
