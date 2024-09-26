function Header() {
    return (
        <>
            <div className=" py-4 px-4 flex justify-between items-center">
                <div className="relative w-fit focus:w-60">
                    <i class="fas fa-search absolute top-1/2 -translate-y-1/2 left-2"></i>
                    <input type="search" placeholder="type a keyword" className="form-input pl-8 w-44 md:focus:w-56 transition-width duration-500 rounded" />
                </div>
                <div className="flex justify-center items-center">
                    <i class="fa-regular fa-bell fa-lg"></i>
                    <img src="avatar.png" alt="avatar" className="w-10 h-10 rounded-full ml-4" />
                </div>
            </div>
        </>
    )
}

export default Header;