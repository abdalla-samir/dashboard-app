function CourseCard(props) {
    return (
        <>
            <div className="course bg-white rounded-md flex flex-col">
                <div className="image relative">
                    <img src={props.srone} alt="courses_image" className="max-w-full bg-cover rounded-t-md" />
                    <img src={props.srtwo} alt="team_image" className="absolute top-5 left-5 w-16 rounded-full p-0.5 bg-white" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <div className="p-5">
                        <h2 className="font-medium text-lg">{props.heading}</h2>
                        <p className="mt-3 mb-5 text-gray-400 leading-6 font-medium">{props.description}</p>
                    </div>
                    <div className="py-3 px-5  border-t flex justify-between items-center relative">
                        <div className="text-sm text-gray-500">
                            <i class="fa-regular fa-user"></i>
                            <span className="ml-0.5">{props.user}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <span className="ml-0.5">{props.cost}</span>
                        </div>
                        <span className="course-info">Course Info</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard;