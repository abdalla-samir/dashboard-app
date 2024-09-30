import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Body from "../components/body-header";
function Setting() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Settings" />
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-3">
                        <div className="setting-card">
                            <div className="mb-4">
                                <h2 className="text-2xl main-title ">Site Control</h2>
                                <p className="text-gray-500">Control The Website If There Is Maintenance</p>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-medium text-lg">Website Control</h3>
                                    <p className="text-gray-500 text-sm">Open/Close Website And Type The Reason</p>
                                </div>
                                <div className="checkbox">
                                    <label class="inline-flex items-center cursor-pointer basis-1/4">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <textarea name="" id="" placeholder="Close Message Content" className="resize-none w-full border outline-none py-2 px-4 h-40 mt-4 rounded-md"></textarea>
                        </div>
                        <div className="setting-card">
                            <div className="flex flex-col h-full">
                                <div className="mb-4 ">
                                    <h2 className="text-2xl main-title ">General Info</h2>
                                    <p className="text-gray-500">General Information About Your Account</p>
                                </div>
                                <form method="get" className="flex flex-col flex-1 justify-around">
                                    <div>
                                        <label className="block text-gray-500 mb-1">First Name</label>
                                        <input type="text" placeholder="First Name" className="px-3 w-full border py-2 border-gray-400 outline-none text-gray-400 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 mb-1">Last Name</label>
                                        <input type="text" placeholder="Last Name" className="px-3 w-full border py-2 border-gray-400 outline-none text-gray-400 rounded-md" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 mb-1">Email</label>
                                        <input type="Email" value={"o@nn.sa"} disabled placeholder="Last Name" className="px-3 cursor-not-allowed md:w-4/5 w-full border py-2 border-gray-400 outline-none text-gray-400 rounded-md" />
                                        <a href="#link" className="text-blue-500 text-lg flex-1 md:mx-5 mx-auto mt-3 md:mt-0 md:inline-block block w-fit">Change</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="setting-card flex flex-col">
                            <div className="mb-4">
                                <h2 className="text-2xl main-title ">Security Info</h2>
                                <p className="text-gray-500">Security Information About Your Account</p>
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex justify-between items-center border-b py-3">
                                    <div>
                                        <h3 className="text-lg font-medium">Password</h3>
                                        <p className="text-sm text-gray-500">Last Change On 25/10/2021</p>
                                    </div>
                                    <a href="#link" className="mr-3 py-1 px-2 bg-blue-500 text-white rounded-md font-medium">Change</a>
                                </div>
                                <div className="flex justify-between items-center border-b py-3">
                                    <div>
                                        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                                        <p className="text-sm text-gray-500">Enable/Disable The Feature</p>
                                    </div>
                                    <div className="checkbox">
                                        <label class="inline-flex items-center cursor-pointer basis-1/4">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b py-3">
                                    <div>
                                        <h3 className="text-lg font-medium">Devices</h3>
                                        <p className="text-sm text-gray-500">Check The Login Devices List</p>
                                    </div>
                                    <a href="#link" className="mr-3 py-1 px-2 bg-[#eee] rounded-md font-medium">Devices</a>
                                </div>
                            </div>
                        </div>
                        <div className="setting-card">
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h2 className="text-2xl main-title ">Social Info</h2>
                                    <p className="text-gray-500">Social Media Information</p>
                                </div>
                                <div className="flex-1 gap-4 flex flex-col justify-between">
                                    <div className="flex">
                                        <i class="fa-brands fa-twitter center-flex c-grey w-10 h-10 flex justify-center items-center py-2 px-2 text-gray-500 border"></i>
                                        <input type="text" placeholder="Twitter Username" className="flex-1 outline-none px-2 text-sm border" />
                                    </div>
                                    <div className="flex">
                                        <i class="fa-brands fa-facebook-f center-flex c-grey w-10 h-10 flex justify-center items-center py-2 px-2 text-gray-500 border"></i>
                                        <input type="text" placeholder="Facebook Username" className="flex-1 outline-none px-2 text-sm border" />
                                    </div>
                                    <div className="flex">
                                        <i class="fa-brands fa-linkedin center-flex c-grey w-10 h-10 flex justify-center items-center py-2 px-2 text-gray-500 border"></i>
                                        <input type="text" placeholder="Linkedin Username" className="flex-1 outline-none px-2 text-sm border" />
                                    </div>
                                    <div className="flex">
                                        <i class="fa-brands fa-youtube center-flex c-grey w-10 h-10 flex justify-center items-center text-gray-500 border"></i>
                                        <input type="text" placeholder="Youtube Username" className="flex-1 outline-none px-2 text-sm border" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting-card">
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <h2 className="text-2xl main-title ">Widgets Control</h2>
                                    <p className="text-gray-500">Show/Hide Widgets</p>
                                </div>
                                <ul className="flex-1 flex flex-col justify-between">
                                    <li>
                                        <label for="widget1" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget1" className="mr-3 cursor-pointer" />
                                            Quick Draft
                                        </label>
                                    </li>
                                    <li>
                                        <label for="widget2" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget2" className="mr-3 cursor-pointer " />
                                            Yearly Targets
                                        </label>
                                    </li>
                                    <li>
                                        <label for="widget3" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget3" className="mr-3 cursor-pointer" />
                                            Tickets Statistics
                                        </label>
                                    </li>
                                    <li>
                                        <label for="widget4" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget4" className="mr-3 cursor-pointer" />
                                            Latest News
                                        </label>
                                    </li>
                                    <li>
                                        <label for="widget5" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget5" className="mr-3" />
                                            Latest Tasks
                                        </label>
                                    </li>
                                    <li>
                                        <label for="widget6" className="text-lg cursor-pointer">
                                            <input type="checkbox" id="widget6" className="mr-3" />
                                            Top Search Items
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="setting-card">
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h2 className="text-2xl main-title ">Backup Manager</h2>
                                    <p className="text-gray-500">Control Backup Time And Location</p>
                                </div>
                                <form method="get" className="flex flex-col flex-1 justify-around border-b py-2 gap-3">
                                    <div>
                                        <div>
                                            <input type="radio" name="time" id="daily" />
                                            <label for="daily" className="ml-2">
                                                Daily
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" name="time" id="weekly" />
                                            <label for="weekly" className="ml-2">
                                                Weekly
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" name="time" id="monthly" />
                                            <label for="monthly" className="ml-2">
                                                Monthly
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between gap-3">
                                        <input type="radio" name="server" id="mega" className="appearance-none select-ser" />
                                        <div className="server flex justify-center items-center gap-2">
                                            <label for="mega" className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                                                <i class="fa-solid fa-server d-block "></i>
                                                Megaman
                                            </label>
                                        </div>
                                        <input type="radio" name="server" id="zero" className="appearance-none select-ser" />
                                        <div className="server flex justify-center items-center gap-2">
                                            <label for="zero" className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                                                <i class="fa-solid fa-server d-block "></i>
                                                Zero
                                            </label>
                                        </div>
                                        <input type="radio" name="server" id="sigma" className="appearance-none select-ser" />
                                        <div className="server flex justify-center items-center gap-2">
                                            <label for="sigma" className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                                                <i class="fa-solid fa-server d-block "></i>
                                                Sigma
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Setting;