const Navbar = () => {
    return (
        <div className="flex h-[56px] items-center justify-between px-40 *:text-xl mt-2">
            <div>
                <button className="text-[#6B4D97] text-lg shadow shadow-slate-500 px-4 py-2 rounded">FRIENDS</button>
            </div>
            <div className="flex justify-between mx-4 items-center space-x-6">
                <p>About</p>
                <p>Person</p>
                <button className="text-white bg-[#ACCCEA] px-4 py-2 rounded shadow shadow-slate-300">Contact</button>
            </div>
        </div>
    )
}

export default Navbar