function Header() {
    return (
        <>
            <div className=" py-4 px-4 flex justify-between items-center">
                <div className="relative w-fit focus:w-60">
                    <i class="fas fa-search absolute top-1/2 -translate-y-1/2 left-2 text-gray-400"></i>
                    <input type="search" placeholder="type a keyword" className="py-2 pl-8 w-44 md:focus:w-52 transition-width duration-300 rounded-lg border border-gray-300 outline-none" />
                </div>
                <div className="flex justify-center items-center">
                    <i class="fa-regular fa-bell fa-lg ring-after"></i>
                    <img src="avatar.png" alt="avatar" className="w-10 h-10 rounded-full ml-4" />
                </div>
            </div>
        </>
    )
}

export default Header;