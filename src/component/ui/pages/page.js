import React from 'react'
import Home from './home'
import { AboutMain, AboutIdea, AboutCondition, AboutSNS } from './about'
import { PageContactMain, PageProgramMain, PageInfoMain } from "../../containers";

const Page = ({ currentPage }) => {
    switch (currentPage.pageTitle) {
        case "HOME":
            return <Home />
        case "ABOUT":
            return <AboutMain />
        case "ABOUT_IDEA":
            return <AboutIdea />
        case "ABOUT_CONDITION":
            return <AboutCondition />
        case "ABOUT_SNS":
            return <AboutSNS />
        case "PROGRAM":
            return <PageProgramMain />
        case "CONTACT":
            return <PageContactMain />
        case "INFO":
            return <PageInfoMain/>
        default:
            return <div>Not Found Page: {currentPage.pageTitle}</div>
    }
}

export default  Page