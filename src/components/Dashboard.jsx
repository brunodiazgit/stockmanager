import { Link } from "react-router-dom"

function DashBoard() {
    return (
            <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-16 gap-10 lg:gap-20 ">
                <Link to={'/create'}>
                    <img className="h-32 lg:h-40"  src="/add-document.png" alt="Icon" />
                </Link>
                <Link to={'/stock'}>
                    <img className="h-32 lg:h-40"  src="/warehouse.png" alt="Icon" />
                </Link>
                <Link to={'/settings'}>
                    <img className="h-32 lg:h-40" src="/gear.png" alt="Icon" />
                </Link>
            </div>
    )
}

export default DashBoard