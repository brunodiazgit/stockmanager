import { Link } from "react-router-dom"

function DashBoard() {
    return (
        <div className="flex flex-col ">
            <div className="flex justify-center">Dashboard ! ! !</div>
            <Link to={'/create'}>Add Product</Link>
            <Link to={'/stock'}>Storage</Link>
        </div>
    )
}

export default DashBoard