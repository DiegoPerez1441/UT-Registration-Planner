import React from "react"
import styles from "./QuickActionsBar.module.scss"
import QuickActionButton from "./QuickActionButton"

import SearchIcon from "@mui/icons-material/Search"
// RIS Icon?
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import SchoolIcon from "@mui/icons-material/School"

type Props = {}

const QuickActionsBar = (props: Props) => {
    return (
        <div className={styles.container}>
            <QuickActionButton>
                <SearchIcon />
            </QuickActionButton>

            <QuickActionButton>RIS</QuickActionButton>
            <QuickActionButton>
                <FormatListNumberedIcon />
            </QuickActionButton>
            <QuickActionButton>
                <SchoolIcon />
            </QuickActionButton>
        </div>
    )
}

export default QuickActionsBar
