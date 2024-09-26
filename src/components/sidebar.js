/* on progress */

import { Link } from "react-router-dom";
function Sidebar() {

    return (
        <>
            <div className='w-fit md:w-[250px] md:px-5 px-3 flex flex-col  items-center shadow-xl z-50 shadow-gray-300'>
                <h3 className="text-lg font-bold mt-5">Aboood</h3>
                <div className="w-24 h-0.5 mt-4 md:flex hidden justify-between items-center">
                    <div className="w-10 h-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full  bg-black"></div>
                    <div className="w-10 h-full bg-black"></div>
                </div>
                <nav className="mt-5 w-full md:block flex flex-col justify-center items-center">
                    <Link to={"/"} className="side-link">
                        <i class="fa-regular fa-chart-bar fa-fw"></i>
                        <span className="side-span">Dashboard</span>
                    </Link>
                    <Link to={"/setting"} className="side-link">
                        <i class="fa-solid fa-gear fa-fw"></i>
                        <span className="side-span">Setting</span>
                    </Link>
                    <Link to={"/profile"} className="side-link">
                        <i class="fa-regular fa-user fa-fw"></i>
                        <span className="side-span">Profile</span>
                    </Link>
                    <Link to={"/projects"} className="side-link">
                        <i class="fa-solid fa-diagram-project fa-fw"></i>
                        <span className="side-span">Projects</span>
                    </Link>
                    <Link to={"/courses"} className="side-link">
                        <i class="fa-solid fa-graduation-cap fa-fw"></i>
                        <span className="side-span">Courses</span>
                    </Link>
                    <Link to={"/friends"} className="side-link">
                        <i class="fa-regular fa-circle-user fa-fw"></i>
                        <span className="side-span">Friends</span>
                    </Link>
                    <Link to={"/files"} className="side-link">
                        <i class="fa-regular fa-file fa-fw"></i>
                        <span className="side-span">Files</span>
                    </Link>
                    <Link to={"/plans"} className="side-link">
                        <i class="fa-regular fa-credit-card fa-fw"></i>
                        <span className="side-span">Plans</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;