function Body(props) {
    return (
        <>
            <h2 className="text-4xl font-medium">{props.name}</h2>
            <span className="block relative w-44 h-1 mt-2 mb-6 before:w-1/3 before:h-full before:bg-black before:absolute bg-white" />
        </>
    )
}

export default Body;