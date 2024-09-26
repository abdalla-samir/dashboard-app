function FriendCard(props) {
    return (
        <>
            <div className="friends">
                <div className="flex gap-1">
                    <div className="friend-contact">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="friend-contact">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="w-fit mx-auto text-center -mt-4">
                    <img src={props.src} alt="friend_avatar_image" className="w-24 rounded-full mx-auto mb-3" />
                    <h2 className="font-bold">{props.name}</h2>
                    <p className="text-sm text-gray-500">{props.specialist}</p>
                </div>
                <div className="py-2 border-y my-4 flex justify-between items-center">
                    <div>
                        <div className="py-1">
                            <i class="fa-regular fa-face-smile fa-fw text-sm"></i><span className="ml-2 ">{props.friends} Friend</span>
                        </div>
                        <div className="py-1">
                            <i class="fa-solid fa-code-commit fa-fw text-sm"></i><span className="ml-2 ">{props.projects} Projects</span>
                        </div>
                        <div className="py-1">
                            <i class="fa-regular fa-newspaper fa-fw text-sm"></i><span className="ml-2 ">{props.article} Articles</span>
                        </div>
                    </div>
                    {
                        props.vip === "yes" && <span className="vip">VIP</span>
                    }
                </div>
                <div className="flex justify-between items-center">
                    <span className="join-date">Joined {props.date}</span>
                    <div>
                        <a href="#link" className="friends-card-link bg-blue-500">Profile</a>
                        <a href="#link" className="friends-card-link bg-red-500 ml-1">Remove</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendCard;