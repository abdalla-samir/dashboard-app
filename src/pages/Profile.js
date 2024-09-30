import Body from "../components/body-header";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Profile() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Profile" />
                    <div className="flex flex-col md:flex-row p-4 bg-white rounded-md">
                        <div className="flex flex-col gap-3 justify-center items-center px-10 py-4">
                            <img src="avatar.png" alt="avatar_image" className="w-32" />
                            <h2 className="font-bold text-xl">Abdalla Samir</h2>
                            <span className="text-gray-500 text-lg">Level 20</span>
                            <div className="relative w-full h-2 bg-[#eee] rounded-md">
                                <span className="absolute top-0 left-0 w-4/5 h-full bg-blue-500 rounded-md"></span>
                            </div>
                            <div className="flex justify-center items-center">
                                <i class="fa-solid fa-star c-orange fs-13 text-amber-500 text-sm"></i>
                                <i class="fa-solid fa-star c-orange fs-13 ml-1 text-amber-500 text-sm"></i>
                                <i class="fa-solid fa-star c-orange fs-13 ml-1 text-amber-500 text-sm"></i>
                                <i class="fa-solid fa-star c-orange fs-13 ml-1 text-amber-500 text-sm"></i>
                                <i class="fa-solid fa-star c-orange fs-13 ml-1 text-amber-500 text-sm"></i>
                            </div>
                            <span className="text-sm text-gray-500">550 Rating</span>
                        </div>
                        <div className="flex-1">
                            <div className="border-l border-b border-gray-200 px-4 py-2">
                                <h2 className="text-lg  text-gray-500 mb-3 ">General Information</h2>
                                <div className="profile-info-container">
                                    <p className="profile-info"><span className="text-gray-500">Full Name: </span> Abdalla Samir</p>
                                    <p className="profile-info"><span className="text-gray-500">Gender: </span> Male</p>
                                    <p className="profile-info"><span className="text-gray-500">Country: </span> Egypt</p>
                                    <div className="checkbox">
                                        <label class="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-l border-b border-gray-200 px-4 py-2">
                                <h2 className="text-lg  text-gray-500 mb-3 ">Personal Information</h2>
                                <div className="profile-info-container">
                                    <p className="profile-info"><span className="text-gray-500">Email: </span>o@nn.sa</p>
                                    <p className="profile-info"><span className="text-gray-500">Phone: </span> 01095004686</p>
                                    <p className="profile-info"><span className="text-gray-500">Date Of Birth: </span>7/10/2005</p>
                                    <div className="checkbox">
                                        <label class="inline-flex items-center cursor-pointer basis-1/4">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-l border-b border-gray-200 px-4 py-2">
                                <h2 className="text-lg  text-gray-500 mb-3 ">Job Information</h2>
                                <div className="profile-info-container">
                                    <p className="profile-info"><span className="text-gray-500">Title: </span>Full Stack Developer</p>
                                    <p className="profile-info"><span className="text-gray-500">Programming Language: </span> Python</p>
                                    <p className="profile-info"><span className="text-gray-500">Years Of Experience: </span>15+</p>
                                    <div className="checkbox">
                                        <label class="inline-flex items-center cursor-pointer basis-1/4">
                                            <input type="checkbox" value="" className="sr-only peer" checked />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-l border-gray-200 px-4 py-2">
                                <h2 className="text-lg  text-gray-500 mb-3 ">Billing Information</h2>
                                <div className="profile-info-container">
                                    <p className="profile-info"><span className="text-gray-500">Payment Method: </span>Paypal</p>
                                    <p className="profile-info"><span className="text-gray-500">Email: </span> email@website.com</p>
                                    <p className="profile-info"><span className="text-gray-500">Subscription: </span>Monthly</p>
                                    <div className="checkbox">
                                        <label class="inline-flex items-center cursor-pointer basis-1/4">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        <div className="bg-white rounded-md p-4">
                            <div className="mb-8 md:text-start text-center">
                                <h2 className="text-3xl main-title ">My Skills</h2>
                                <p className="text-gray-500">Complete Skills List</p>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-3 my-3">
                                    <li className="skill-list">
                                        <span className="skill">HTML</span>
                                        <span className="skill">Pugjs</span>
                                        <span className="skill">HAML</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">CSS</span>
                                        <span className="skill">SASS</span>
                                        <span className="skill">Stylus</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">JavaScript</span>
                                        <span className="skill">TypeScript</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">Vuejs</span>
                                        <span className="skill">Reactjs</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">Jest</span>
                                        <span className="skill">Jasmine</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">PHP</span>
                                        <span className="skill">Laravel</span>
                                    </li>
                                    <li className="skill-list">
                                        <span className="skill">Python</span>
                                        <span className="skill">Django</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-4 flex flex-col">
                            <div className="mb-3 md:text-start text-center">
                                <h2 className="text-3xl main-title">Latest Activities</h2>
                                <p className="text-gray-500 text-lg">Latest Activities Done By The User</p>
                            </div>
                            <div className="flex flex-col flex-1 justify-between">
                                <div className="flex md:flex-row flex-col text-center justify-between items-center border-b py-3">
                                    <div className="flex justify-between items-center md:text-start text-center md:flex-row flex-col">
                                        <img src="activity-01.png" alt="activty_image" className="w-16" />
                                        <div className="ml-3">
                                            <h3 className="text-xl">Store</h3>
                                            <p className="text-lg text-gray-500">Bought The Mastering Python Course</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col xl:items-end">
                                        <span className="text-lg">18:10</span>
                                        <span className="text-lg text-gray-500">Yesterday</span>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col text-center justify-between items-center border-b py-3">
                                    <div className="flex justify-between items-center md:text-start text-center md:flex-row flex-col">
                                        <img src="activity-02.png" alt="activty_image" className="w-16" />
                                        <div className="ml-3">
                                            <h3 className="text-xl">Academy</h3>
                                            <p className="text-lg text-gray-500">Got The PHP Certificate</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col xl:items-end">
                                        <span className="text-lg">16:05</span>
                                        <span className="text-lg text-gray-500">Yesterday</span>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col text-center justify-between items-center border-b py-3">
                                    <div className="flex justify-between items-center md:text-start text-center md:flex-row flex-col">
                                        <img src="activity-03.png" alt="activty_image" className="w-16" />
                                        <div className="ml-3">
                                            <h3 className="text-xl">Badges</h3>
                                            <p className="text-lg text-gray-500">Unlocked The 10 Skills Badge</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col xl:items-end">
                                        <span className="text-lg">18:05</span>
                                        <span className="text-lg text-gray-500">Yesterday</span>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col text-center justify-between items-center border-b py-3">
                                    <div className="flex justify-between items-center md:text-start text-center md:flex-row flex-col">
                                        <img src="activity-01.png" alt="activty_image" className="w-16" />
                                        <div className="ml-3">
                                            <h3 className="text-xl">Store</h3>
                                            <p className="text-lg text-gray-500">Bought The Typescript Course</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col xl:items-end">
                                        <span className="text-lg">12:05</span>
                                        <span className="text-lg text-gray-500">Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;