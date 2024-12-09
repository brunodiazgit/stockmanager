import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false) 
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-gray-800 p-4">
            <nav>
                <div className="flex justify-between items-center">
                    <Link to={'/'} className="text-white text-xl">Admin</Link>
                    <button
                        className="text-white md:hidden"
                        onClick={toggleMenu}
                    >
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </button>
                </div>
                <ul
                    className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}
                >
                    <li className="text-white">
                        <a href="">Dashboard</a>
                    </li>
                    <li className="text-white">
                        <a href="">Add Product</a>
                    </li>
                    <li className="text-white">
                        <a href="">Storage</a>
                    </li>
                    <li className="text-white">
                        <a href="">Settings</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
