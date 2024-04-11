const Navbar = () => {
    return (
        <div className="flex h-[56px] items-center justify-between px-40 *:text-xl mt-2">
            <div>
                <p className="text-[#6B4D97] text-lg shadow shadow-slate-500 px-4 py-2 rounded">FRIENDS</p>
            </div>
            <div className="flex justify-between mx-4 items-center space-x-6">
                <p>About</p>
                <p>Person</p>
                <p className="text-white bg-[#ACCCEA] px-4 py-2 rounded shadow shadow-slate-300">Contact</p>
            </div>
        </div>
    )
}

export default Navbar