import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Contact from "../components/Contact"

function index() {
    return (<>
        <Navbar />
        <Banner />
        <Experience />
        <Project />
        <Contact />
    </>
    )
}

export default index