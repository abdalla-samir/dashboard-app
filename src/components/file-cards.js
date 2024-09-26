function FileCard(props) {
    return (
        <>
            <div className="file-card">
                <div><i class="fa-solid fa-download c-grey p-absolute text-gray-500 hover:text-blue-500 transition cursor-pointer"></i></div>
                <div className="w-fit mx-auto my-2 text-center">
                    <img src={props.src} alt="file_image" className="file-image" />
                    <span className="text-base font-medium">{props.name}</span>
                </div>
                <div>
                    <span className="text-gray-500 text-sm mb-2 block">{props.user}</span>
                </div>
                <div className="border-t py-3 flex justify-between text-sm text-gray-500">
                    <span className="date">{props.date}</span>
                    <span className="size">{props.size}</span>
                </div>
            </div>
        </>
    )
}
export default FileCard;