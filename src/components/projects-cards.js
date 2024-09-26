function ProjectCard(props) {
    return (
        <>
            <div className="p-4 bg-white rounded-md">
                <div className="relative mb-9">
                    <h2 className="mb-2 text-lg">{props.header}</h2>
                    <span className="absolute right-2 -top-1 text-gray-500 text-xs font-medium">{props.date}</span>
                    <p className="text-gray-500 ">{props.description}</p>
                </div>
                <div className="flex">
                    {props.firstimage === "yes" && <img src="team-01.png" alt="team_image" className="embedded-images m-0 " />}
                    {props.secondimage === "yes" && <img src="team-02.png" alt="team_image" className="embedded-images " />}
                    {props.thirdimage === "yes" && <img src="team-03.png" alt="team_image" className="embedded-images " />}
                    {props.fourthimage === "yes" && <img src="team-04.png" alt="team_image" className="embedded-images" />}
                    {props.fifthimage === "yes" && <img src="team-05.png" alt="team_image" className="embedded-images" />}
                </div>
                <div className="border-y py-4 flex flex-col gap-2 md:flex-row justify-end my-4">
                    {props.skillone === "yes" && <span className="proj-team-skills">Programming</span>}
                    {props.skilltwo === "yes" && <span className="proj-team-skills">Design</span>}
                    {props.skillthree === "yes" && <span className="proj-team-skills">Hosting</span>}
                    {props.skillfour === "yes" && <span className="proj-team-skills">Marketing</span>}
                </div>
                <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
                    <div className="w-64 min-w-52 bg-[#eee] h-2 relative rounded-md">
                        <span className={`w-${props.prog} h-full top-0 bg-${props.spancolor}-500 left-0 absolute rounded-md`}></span>
                    </div>
                    <div className="text-gray-500">
                        <i class="fa-solid fa-dollar-sign"></i><span className="ml-1">{props.cost}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;