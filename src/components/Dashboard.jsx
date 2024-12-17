import { Link } from "react-router-dom"

function DashBoard() {
    return (
        <div className="flex flex-col justify-center items-center p-10 gap-10 dark:bg-blue-950">
            <Link to={'/create'}>
                <img style={{height: '8rem'}} src="/add-document.png" alt="Icon" />
            </Link>
            <Link to={'/stock'}>
                <img style={{height: '8rem'}} src="/warehouse.png" alt="Icon" />
            </Link>
            <Link to={'/settings'}>
                <img style={{height: '8rem'}} src="/gear.png" alt="Icon" />
            </Link>
        </div>
    )
}

export default DashBoard