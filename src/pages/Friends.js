import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Body from "../components/body-header";
import FriendCard from "../components/friend-card";

function Friends() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Friends" />
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3">
                        <FriendCard src="friend-01.jpg" name="Ahmed Nasser" specialist="JavaScript Developer" friends="99" projects="15" article="25" date="02/10/2021" vip="yes" />
                        <FriendCard src="friend-02.jpg" name="Omar Fathy" specialist="Cloud Developer" friends="30" projects="11" article="12" date="02/08/2020" vip="no" />
                        <FriendCard src="friend-03.jpg" name="Omar Ahmed" specialist="Mobile Developer" friends="80" projects="20" article="18" date="02/06/2020" vip="no" />
                        <FriendCard src="friend-04.jpg" name="Shady Nabil" specialist="Back-End Developer" friends="70" projects="30" article="18" date="28/06/2020" vip="no" />
                        <FriendCard src="friend-05.jpg" name="Mohamed Ibrahim" specialist="Algorithm Developer" friends="80" projects="30" article="18" date="28/08/2020" vip="no" />
                        <FriendCard src="friend-04.jpg" name="Amr Hendawy" specialist="Back-End Developer" friends="70" projects="30" article="18" date="28/06/2020" vip="no" />
                        <FriendCard src="friend-02.jpg" name="Mahmoud Adel" specialist="Cloud Developer" friends="30" projects="11" article="12" date="02/08/2020" vip="no" />
                        <FriendCard src="friend-05.jpg" name="Ahmed Abuzaid" specialist="Content Creator" friends="80" projects="30" article="18" date="28/08/2020" vip="yes" />
                        <FriendCard src="friend-01.jpg" name="Gareeb Elshiekh" specialist="JavaScript Developer" friends="90" projects="15" article="25" date="02/10/2020" vip="yes" />
                        <FriendCard src="friend-03.jpg" name="Hamza" specialist="Front-End Developer" friends="80" projects="20" article="18" date="02/06/2020" vip="no" />
                    </div>
                </div>
            </div >
        </>)
}

export default Friends;