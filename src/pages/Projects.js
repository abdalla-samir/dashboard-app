import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Body from "../components/body-header";
import ProjectCard from "../components/projects-cards";
function Projects() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Projects" />
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-3">
                        <ProjectCard
                            header="Elzero Dashboard"
                            date="15/10/2021"
                            description="Elzero Dashboard Project Design And Programming And Hosting"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="yes" fifthimage="yes"
                            skillone="yes" skilltwo="yes" skillthree="yes" skillfour="yes"
                            spancolor="red"
                            prog="4/5"
                            cost="2500" />
                        <ProjectCard
                            header="Academy Portal"
                            date="15/6/2022"
                            description="Academy Portal Project Design And Programming"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="yes" skilltwo="yes" skillthree="no" skillfour="no"
                            spancolor="green"
                            prog="1/2"
                            cost="1800" />
                        <ProjectCard
                            header="Chatting Application"
                            date="15/6/2022"
                            description="Chatting Application Project Design"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="no" skilltwo="yes" skillthree="no" skillfour="no"
                            spancolor="blue"
                            prog="1/2"
                            cost="950" />
                        <ProjectCard
                            header="Ahmed Dashboard"
                            date="15/6/2022"
                            description="Ahmed Dashboard Project Design And Programming And Hosting"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="yes" fifthimage="no"
                            skillone="yes" skilltwo="yes" skillthree="yes" skillfour="yes"
                            spancolor="green"
                            prog="1/2"
                            cost="1700" />
                        <ProjectCard
                            header="Ahmed Portal"
                            date="15/6/2022"
                            description="Ahmed Portal Project Design And Programming"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="yes" skilltwo="yes" skillthree="no" skillfour="no"
                            spancolor="green"
                            prog="3/4"
                            cost="850" />
                        <ProjectCard
                            header="Mohamed Application"
                            date="15/6/2022"
                            description="Mohamed Application Project Design"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="no" skilltwo="yes" skillthree="no" skillfour="no"
                            spancolor="red"
                            prog="1/2"
                            cost="950" />
                        <ProjectCard
                            header="Mohamed Dashboard"
                            date="15/6/2022"
                            description="Mohamed Dashboard Project Design And Programming And Hosting"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="yes"
                            skillone="yes" skilltwo="yes" skillthree="yes" skillfour="yes"
                            spancolor="green"
                            prog="3/4"
                            cost="1950" />
                        <ProjectCard
                            header="Mohamed Portal"
                            date="15/6/2022"
                            description="Mohamed Portal Project Design And Programming"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="yes" skilltwo="yes" skillthree="no" skillfour="no"
                            spancolor="green"
                            prog="3/4"
                            cost="1650" />
                        <ProjectCard
                            header="Ahmed Application"
                            date="15/6/2022"
                            description="Ahmed Application Project Design"
                            firstimage="yes" secondimage="yes" thirdimage="yes" fourthimage="no " fifthimage="no"
                            skillone="yes" skilltwo="yes" skillthree="yes" skillfour="yes"
                            spancolor="green"
                            prog="4/5"
                            cost="950" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;