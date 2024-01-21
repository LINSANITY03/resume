import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Contact from "../components/Contact"
import { SelectedPage } from "../utils/types"
import { useState } from "react"
import Referral from "../components/Referral"

function Index() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

    return (<>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Banner setSelectedPage={setSelectedPage} />
        <Experience setSelectedPage={setSelectedPage} />
        <Project setSelectedPage={setSelectedPage} />
        <Referral />
        <Contact setSelectedPage={setSelectedPage} />
    </>
    )
}

export default Index
