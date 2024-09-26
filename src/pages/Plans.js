import Body from "../components/body-header";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Plans() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Plans" />
                    <div className="mt-4 grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-4">
                        <div className="plans-card">
                            <div className="plans-card-header bg-green-500 outline-green-500">
                                <h2 className="plans-card-h2">Free</h2>
                                <div className="plans-card-price">
                                    <span className="plans-card-span">$</span>
                                    0.00
                                </div>
                            </div>
                            <ul className="plans-card-ul">
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Text Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Videos Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Appear On Leaderboard</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">Browse Content Without Ads</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">Access All Assignments</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">Get Daily Prizes</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">Earn Certificate</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">1 GB Space For Hosting Files</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li border-none">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">Access Badge System</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                            </ul>
                            <a href="#link" className="join-link bg-green-500">Join</a>
                        </div>
                        <div className="plans-card">
                            <div className="plans-card-header bg-blue-500 outline-blue-500">
                                <h2 className="plans-card-h2">Basic</h2>
                                <div className="plans-card-price">
                                    <span className="plans-card-span">$</span>
                                    7.99
                                </div>
                            </div>
                            <ul className="plans-card-ul">
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Text Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Access All Videos Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Appear On Leaderboard</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Browse Content Without Ads</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Assignments</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Get Daily Prizes</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">
                                            Earn Certificate</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">1 GB Space For Hosting Files</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li border-none">
                                    <div>
                                        <i class="fa-solid fa-xmark fa-fw no"></i>
                                        <span className="ml-2 font-medium">
                                            Access Badge System</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                            </ul>
                            <a href="#link" className="join-link bg-blue-500">Join</a>
                        </div>
                        <div className="plans-card">
                            <div className="plans-card-header bg-orange-500 outline-orange-500">
                                <h2 className="plans-card-h2">Premium</h2>
                                <div className="plans-card-price">
                                    <span className="plans-card-span">$</span>
                                    19.99
                                </div>
                            </div>
                            <ul className="plans-card-ul">
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Text Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Videos Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Appear On Leaderboard</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Browse Content Without Ads</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Assignments</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">
                                            Get Daily Prizes</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Earn Certificate</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">1 GB Space For Hosting Files</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                                <li className="plans-card-li border-none">
                                    <div>
                                        <i class="fa-solid fa-check fa-fw yes"></i>
                                        <span className="ml-2 font-medium">Access All Text Lessons</span>
                                    </div>
                                    <i class="fa-solid fa-circle-info help text-gray-500 cursor-pointer"></i>
                                </li>
                            </ul>
                            <p className="text-center text-gray-400 text-lg ">
                                Access Badge System</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans;