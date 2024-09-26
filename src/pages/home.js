import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Body from "../components/body-header";
function Home() {
    return (
        <>
            {/* sidebar */}
            <Sidebar />
            {/* body */}
            <div className="w-full">
                {/* header */}
                <Header />
                {/* home body name */}
                <div className="bg-[#f1f5f9] p-4">
                    <Body name="Dashboard" />
                    {/* body */}
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-4">
                        {/*start first card */}
                        <div className="card p-0 bg-white rounded-md">
                            <div className="header flex bg-[#eee] relative justify-between rounded-t-md p-4">
                                <div className="header">
                                    <h2 className="main-title">Welcome</h2>
                                    <p className="header-p">Abdalla</p>
                                </div>
                                <div>
                                    <img src="welcome.png" alt="welcome_image" className="w-64 md:block hidden" />
                                </div>
                            </div>
                            <div>
                                <img src="avatar.png" alt="avatar_image" className="w-20 relative rounded-full -mt-11 md:ml-5 mx-auto z-10 p-1 bg-white" />
                            </div>
                            <div className="info flex md:flex-row gap-6 justify-around border-y py-5 mt-5 text-center items-center">
                                <div className="flex flex-col">
                                    <span className="info-f-span">
                                        Abdalla Samir
                                    </span>
                                    <span className="info-s-span">
                                        Developer
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="info-f-span">
                                        80
                                    </span>
                                    <span className="info-s-span">
                                        Projects
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="info-f-span">
                                        $8500
                                    </span>
                                    <span className="info-s-span">
                                        Earned
                                    </span>
                                </div>
                            </div>
                            <div className="holder">
                                <Link to={"/profile"} className="mr-4 text-white px-4 py-1 text-md font-medium rounded bg-blue-600 hover:bg-blue-700 transition">Profile</Link>
                            </div>
                        </div>
                        {/*end first card */}
                        {/* start second card */}
                        <div className="card">
                            <h2 className="main-title">Quick Draft
                            </h2>
                            <p className="header-p">Write A Draft For Your Ideas</p>
                            <form method="get">
                                <input type="text" name="title" placeholder="Your title" className="p-2 border outline-none block w-full my-3 bg-[#eee]" />
                                <textarea name="message" placeholder="Your thought" className="p-2 border outline-none resize-none w-full h-48 bg-[#eee]"></textarea>
                                <div className="holder">
                                    <input type="submit" value={"Save"} className="py-1 px-4 rounded-md text-white font-medium cursor-pointer bg-blue-600 hover:bg-blue-700 transition" />
                                </div>
                            </form>
                        </div>
                        {/* end second card */}
                        {/* start third card */}
                        <div className="card">
                            <h2 className="main-title">Yearly Targets</h2>
                            <p className="header-p">Targets Of The Year</p>
                            <div className="box my-3 flex flex-col gap-7">
                                <div className="box-card">
                                    <div className="box-image bg-blue-200">
                                        <i class="fa-solid fa-dollar-sign fa-lg c-blue text-blue-600"></i>
                                    </div>
                                    <div className="box-info">
                                        <span className="name block">Money</span>
                                        <span className="value block">$20.000</span>
                                        <span className="progress bg-blue-200 before:bg-blue-600 before:w-[80%] after:bg-blue-600 after:left-[80%] after:content-['80%'] block"></span>
                                    </div>
                                </div>
                                <div className="box-card">
                                    <div className="box-image bg-orange-200">
                                        <i class="fa-solid fa-code fa-lg c-orange text-orange-400"></i>
                                    </div>
                                    <div className="box-info">
                                        <span className="name block">Projects</span>
                                        <span className="value block">24</span>
                                        <span className="progress bg-orange-200 before:bg-orange-400 before:w-[55%] after:bg-orange-400 after:left-[55%] after:content-['55%'] block"></span>
                                    </div>
                                </div>
                                <div className="box-card">
                                    <div className="box-image bg-green-200">
                                        <i class="fa-solid fa-user fa-lg c-green text-green-600"></i>
                                    </div>
                                    <div className="box-info">
                                        <span className="name block">Team</span>
                                        <span className="value block">12</span>
                                        <span className="progress bg-green-200 before:bg-green-600 before:w-[75%] after:bg-green-600 after:left-[75%] after:content-['75%'] block"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end third card */}
                        {/* start fourth card */}
                        <div className="card">
                            <h2 className="main-title">Tickets Statistics</h2>
                            <p className="header-p">Everything About Support Tickets</p>
                            <div className="container flex gap-[5px] flex-wrap my-3">
                                <div className="flex flex-col gap-1 text-center border border-gray-500 w-full sm:w-calc-one p-4 rounded-md">
                                    <i class="fa-regular fa-rectangle-list fa-2x text-orange-400"></i>
                                    <span className="text-2xl font-medium">2500</span>
                                    <span className="text-gray-500">Total</span>
                                </div>
                                <div className="flex flex-col gap-2 text-center border border-gray-500 w-full sm:w-calc-one p-4 rounded-md">
                                    <i class="fa-solid fa-spinner fa-2x text-blue-500"></i>
                                    <span className="text-2xl font-medium">500</span>
                                    <span className="text-gray-500">Pending</span>
                                </div>
                                <div className="flex flex-col gap-2 text-center border border-gray-500 w-full sm:w-calc-one p-4 rounded-md">
                                    <i class="fa-regular fa-circle-check fa-2x text-green-500"></i>
                                    <span className="text-2xl font-medium">1900</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                                <div className="flex flex-col gap-2 text-center border border-gray-500 w-full sm:w-calc-one p-4 rounded-md">
                                    <i class="fa-regular fa-rectangle-xmark fa-2x text-red-500"></i>
                                    <span className="text-2xl font-medium">100</span>
                                    <span className="text-gray-500">Deleted</span>
                                </div>
                            </div>
                        </div>
                        {/* end fourth card */}
                        {/* start fifth card */}
                        <div className="card flex flex-col justify-between">
                            <div className="fourth-card">
                                <div className="fourth-card-box">
                                    <img src="news-01.png" alt="news_one" className="w-24 rounded-md" />
                                    <div className="ml-3">
                                        <p className=" font-bold">Created SASS Section</p>
                                        <p className="text-gray-500">New SASS Examples & Tutorials</p>
                                    </div>
                                </div>
                                <span className="bg-[#eee] text-center font-bold text-xs py-1 px-3 rounded-md">3 Days Ago</span>
                            </div>
                            <div className="fourth-card">
                                <div className="fourth-card-box">
                                    <img src="news-02.png" alt="news_one" className="w-24 rounded-md" />
                                    <div className="ml-3">
                                        <p className="text-lg font-medium">Changed The Design</p>
                                        <p className="text-gray-500">A Brand New Website Design</p>
                                    </div>
                                </div>
                                <span className="bg-[#eee] text-center font-bold text-xs py-1 px-3 rounded-md">5 Days Ago</span>
                            </div>
                            <div className="fourth-card">
                                <div className="fourth-card-box">
                                    <img src="news-03.png" alt="news_one" className="w-24 rounded-md" />
                                    <div className="ml-3">
                                        <p className="text-lg font-medium">Team Increased</p>
                                        <p className="text-gray-500">3 Developers Joined The Team</p>
                                    </div>
                                </div>
                                <span className="bg-[#eee] text-center font-bold text-xs py-1 px-3 rounded-md">7 Days Ago</span>
                            </div>
                            <div className="fourth-card border-none">
                                <div className="fourth-card-box">
                                    <img src="news-04.png" alt="news_one" className="w-24 rounded-md" />
                                    <div className="ml-3">
                                        <p className="text-lg font-medium">Added Payment Gateway</p>
                                        <p className="text-gray-500">Many New Payment Gateways Added</p>
                                    </div>
                                </div>
                                <span className="bg-[#eee] text-center font-bold text-xs py-1 px-3 rounded-md">9 Days Ago</span>
                            </div>
                        </div>
                        {/* end fifth card */}
                        {/* start sixth card */}
                        <div className="card">
                            <h2 className="main-title">Latest Tasks</h2>
                            <div className="flex flex-col justify-between">
                                <div className="task-card">
                                    <div>
                                        <p className="font-medium text-md">Record One New Video</p>
                                        <p className="text-lg text-gray-500">Record Python Create Exe Project</p>
                                    </div>
                                    <button className="h-fit">
                                        <i class="fa-regular fa-trash-can delete hover:text-red-600 transition text-lg"></i>
                                    </button>
                                </div>
                                <div className="task-card">
                                    <div>
                                        <p className="font-medium text-md">Write Article
                                        </p>
                                        <p className="text-lg text-gray-500">Write Low Level vs High Level Languages</p>
                                    </div>
                                    <button>
                                        <i class="fa-regular fa-trash-can delete hover:text-red-600 transition text-lg"></i>
                                    </button>
                                </div>
                                <div className="task-card">
                                    <div>
                                        <p className="font-medium text-md">Finish Project</p>
                                        <p className="text-lg text-gray-500">Publish Academy Programming Project</p>
                                    </div>
                                    <button>
                                        <i class="fa-regular fa-trash-can delete hover:text-red-600 transition text-lg"></i>
                                    </button>
                                </div>
                                <div className="task-card">
                                    <div>
                                        <p className="font-medium text-md line-through text-gray-500">Attend The Meeting</p>
                                        <p className="text-lg line-through text-gray-400">Attend The Project Business Analysis Meeting</p>
                                    </div>
                                    <button>
                                        <i class="fa-regular fa-trash-can delete hover:text-red-600 transition text-lg"></i>
                                    </button>
                                </div>
                                <div className="task-card border-none">
                                    <div>
                                        <p className="font-medium text-md">Finish Lesson</p>
                                        <p className="text-lg text-gray-500">Finish Teaching Flex Box</p>
                                    </div>
                                    <button>
                                        <i class="fa-regular fa-trash-can delete hover:text-red-600 transition text-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* end sixth card */}
                        {/* start seventh card */}
                        <div className="card">
                            <h2 className="main-title">Top Search Items</h2>
                            <div className="mt-3 flex flex-col gap-3">
                                <div className="flexbox">
                                    <span className="text-gray-500 text-lg font-normal">Keyword</span>
                                    <span className="text-gray-500 text-lg font-normal">Search Count</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">Programming</p>
                                    <span className="custom-span-one">220</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">JavaScript</p>
                                    <span className="custom-span-one">180</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">PHP</p>
                                    <span className="custom-span-one">160</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">Code</p>
                                    <span className="custom-span-one">145</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">Design</p>
                                    <span className="custom-span-one">110</span>
                                </div>
                                <div className="flexbox">
                                    <p className="text-lg font-medium">Logic</p>
                                    <span className="custom-span-one">95</span>
                                </div>
                            </div>
                        </div>
                        {/* end seventh card */}
                        {/* start card number 8 */}
                        <div className="card">
                            <h2 className="main-title">Latest Uploads</h2>
                            <div className="flex flex-col mt-3">
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="pdf.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">my-file.pdf</p>
                                            <p className="text-gray-500">Elzero</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">2.9mb</span>
                                </div>
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="avi.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">My-Video-File.avi</p>
                                            <p className="text-gray-500">Admin</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">4.9mb</span>
                                </div>
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="psd.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">My-Psd-File.pdf</p>
                                            <p className="text-gray-500">Osama</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">4.5mb</span>
                                </div>
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="zip.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">My-Zip-File.pdf</p>
                                            <p className="text-gray-500">User</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">8.9mb</span>
                                </div>
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="dll.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">My-DLL-File.pdf</p>
                                            <p className="text-gray-500">Admin</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">4.9mb</span>
                                </div>
                                <div className="flexbox">
                                    <div className="flex justify-between items-center">
                                        <img src="eps.svg" alt="pdf_file" className="w-10" />
                                        <div className="ml-3">
                                            <p className="text-lg font-medium">My-Eps-File.pdf</p>
                                            <p className="text-gray-500">Designer</p>
                                        </div>
                                    </div>
                                    <span className="custom-span-one">8.9mb</span>
                                </div>
                            </div>
                        </div>
                        {/* end card number 8 */}
                        {/* start card number 9 */}
                        <div className="card relative">
                            <h2 className="main-title">Last Project Progress</h2>
                            <div className="flex flex-col justify-between gap-8 mt-3">
                                <div className="flex">
                                    <span className="span-progress span-progress-before span-progress-after"></span>
                                    <p className="text-lg font-normal ml-2">Got The Project</p>
                                </div>
                                <div className="flex">
                                    <span className="span-progress span-progress-before span-progress-after"></span>
                                    <p className="text-lg font-normal ml-2">Started The Project</p>
                                </div>
                                <div className="flex">
                                    <span className="span-progress span-progress-before span-progress-after"></span>
                                    <p className="text-lg font-normal ml-2">The Project About To Finish</p>
                                </div>
                                <div className="flex">
                                    <span className="span-progress span-progress-before span-progress-before-animate span-progress-after"></span>
                                    <p className="text-lg font-normal ml-2">Test The Project</p>
                                </div>
                                <div className="flex">
                                    <span className="span-progress "></span>
                                    <p className="text-lg font-normal ml-2">Finish The Project & Get Money</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <img src="project.png" alt="project_image" className="w-36 opacity-30" />
                            </div>
                        </div>
                        {/* end card number 9 */}
                        {/* start card number 10 */}
                        <div className="card">
                            <h2 className="main-title">Reminders</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex">
                                    <div className="px-6 py-2 border-r-2 border-blue-600 reminder-before flex justify-center items-center before:bg-blue-600"></div>
                                    <div className="ml-4">
                                        <h4 className="font-bold mb-2">Check My Tasks List</h4>
                                        <p className="text-sm text-zinc-500">28/09/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="px-6 py-2 border-r-2 border-green-600 reminder-before flex justify-center items-center before:bg-green-600"></div>
                                    <div className="ml-4">
                                        <h4 className="font-bold mb-2">Check My Projects</h4>
                                        <p className="text-sm text-zinc-500">26/10/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="px-6 py-2 border-r-2 border-orange-600 reminder-before flex justify-center items-center before:bg-orange-600"></div>
                                    <div className="ml-4">
                                        <h4 className="font-bold mb-2">Call All My Clients</h4>
                                        <p className="text-sm text-zinc-500">05/11/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="px-6 py-2 border-r-2 border-red-600 reminder-before flex justify-center items-center before:bg-red-600"></div>
                                    <div className="ml-4">
                                        <h4 className="font-bold mb-2">Finish The Development Workshop</h4>
                                        <p className="text-sm text-zinc-500">20/12/2022 - 12:00am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card number 10 */}
                        {/* start card number 11 */}
                        <div className="card">
                            <h2 className="main-title">Latest Post</h2>
                            <div className="prof flex">
                                <img src="avatar.png" alt="profile_image" className="w-14" />
                                <div className="ml-5">
                                    <h2 className="text-lg font-medium ">Abdalla Samir</h2>
                                    <p className="text-lg text-neutral-400">About 3 Hours Ago</p>
                                </div>
                            </div>
                            <p className="my-6 text-lg py-5 border-y">You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.</p>
                            <div className="flex justify-between items-center">
                                <div className="text-gray-500 text-lg ">
                                    <i class="fa-regular fa-heart"></i><span className="ml-2 font-medium">1.8k</span>
                                </div>
                                <div className="text-gray-500 text-lg ">
                                    <i class="fa-regular fa-comments"></i><span className="ml-2 font-medium">500</span>
                                </div>
                            </div>
                        </div>
                        {/* end card number 11 */}
                        {/* start card number 12 */}
                        <div className="card">
                            <h2 className="main-title">Social Media Stats</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center bg-[#1da1f233]">
                                    <div className="flex justify-between items-center">
                                        <div className="min-w-14 py-4 flex justify-center items-center bg-[#1da1f2] text-white hover:rotate-3 transition"><i class="fa-brands fa-twitter fa-2x c-white h-full center-flex"></i></div>
                                        <p className="ml-2 text-lg ">90K Followers</p>
                                    </div>
                                    <a href="#link" className="py-1 px-4 rounded-md mr-2 block bg-[#1da1f2]  text-white">Follow</a>
                                </div>
                                <div className="flex justify-between items-center bg-[#1877f233]">
                                    <div className="flex justify-between items-center">
                                        <div className="min-w-14 py-4 flex justify-center items-center bg-[#1877f2] text-white hover:rotate-3 transition"><i class="fa-brands fa-facebook-f fa-2x c-white h-full center-flex"></i></div>
                                        <p className="ml-2">2M Like</p>
                                    </div>
                                    <a href="#link" className="py-1 px-4 rounded-md mr-2 block bg-[#1877f2] text-white">Like</a>
                                </div>
                                <div className="flex justify-between items-center bg-[#f003]">
                                    <div className="flex justify-between items-center">
                                        <div className="min-w-14 py-4 flex justify-center items-center bg-[#ff0000] text-white hover:rotate-3 transition"><i class="fa-brands fa-youtube fa-2x c-white h-full center-flex"></i></div>
                                        <p className="ml-2">1M Subs</p>
                                    </div>
                                    <a href="#link" className="py-1 px-4 rounded-md mr-2 block bg-[#ff0000] text-white">Subscribe</a>
                                </div>
                                <div className="flex justify-between items-center bg-[#0077b533]">
                                    <div className="flex justify-between items-center">
                                        <div className="min-w-14 py-4 flex justify-center items-center bg-[#0077b5] text-white hover:rotate-3 transition"><i class="fa-brands fa-linkedin fa-2x c-white h-full center-flex"></i></div>
                                        <p className="ml-2">70K Followers</p>
                                    </div>
                                    <a href="#link" className="py-1 px-4 rounded-md mr-2 block bg-[#0077b5] text-white">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card number 12 */}
                    {/* start table
                    <div className="card my-3 w-full">
                        <h2 className="main-title">Projects</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border border-gray-200">
                                <thead>
                                    <tr className="text-lg font-medium bg-[#eee]">
                                        <td className="thead-td">Name</td>
                                        <td className="thead-td">Finish Date</td>
                                        <td className="thead-td">Client</td>
                                        <td className="thead-td">Price</td>
                                        <td className="thead-td">Team</td>
                                        <td className="thead-td">Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbody-td">Ministry Wikipedia</td>
                                        <td className="tbody-td">10 May 2022</td>
                                        <td className="tbody-td">Ministry</td>
                                        <td className="tbody-td">$5300</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-01.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-02.png" alt="team_image" className="team-image" />
                                                <img src="team-03.png" alt="team_image" className="team-image" />
                                                <img src="team-05.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-orange-400">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tbody-td">Elzero Shop</td>
                                        <td className="tbody-td">12 Oct 2021E</td>
                                        <td className="tbody-td">Elzero Company</td>
                                        <td className="tbody-td">$1500</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-01.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-02.png" alt="team_image" className="team-image" />
                                                <img src="team-05.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-blue-500">In Progress</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tbody-td">Bouba App</td>
                                        <td className="tbody-td">05 Sep 2021</td>
                                        <td className="tbody-td">Bouba</td>
                                        <td className="tbody-td">$800</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-02.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-03.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-green-500">Completed</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tbody-td">Mahmoud Website</td>
                                        <td className="tbody-td">Mahmoud Website</td>
                                        <td className="tbody-td">Mahmoud</td>
                                        <td className="tbody-td">$600</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-01.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-02.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-green-500">Completed</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tbody-td">Sayed Website</td>
                                        <td className="tbody-td">24 May 2021</td>
                                        <td className="tbody-td">Sayed</td>
                                        <td className="tbody-td">$300</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-01.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-03.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-red-500">Rejected</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tbody-td">Arena Application</td>
                                        <td className="tbody-td">01 Mar 2021</td>
                                        <td className="tbody-td">Arena Company</td>
                                        <td className="tbody-td">$2600</td>
                                        <td className="tbody-td">
                                            <div className="flex">
                                                <img src="team-01.png" alt="team_image" className="team-image m-0" />
                                                <img src="team-02.png" alt="team_image" className="team-image" />
                                                <img src="team-03.png" alt="team_image" className="team-image" />
                                                <img src="team-04.png" alt="team_image" className="team-image" />
                                            </div>
                                        </td>
                                        <td className="tbody-td">
                                            <span className="table-status bg-green-500">Completed</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                    {/* end table */}
                </div>
            </div>
        </>
    )
}

export default Home;