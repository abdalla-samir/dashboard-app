import Body from "../components/body-header";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Plans() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="bg-[#f1f5f9] p-4 h-full">
                    <Body name="Plans" />
                </div>
            </div>
        </>
    )
}

export default Plans;