import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from "../context/LanguageProvider"


function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const { language } = useLanguage()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-gray-800 p-4">
            <nav>
                <div className="flex justify-between items-center">

                    <Link to={'/'} className="text-white text-xl">
                        Admin
                    </Link>

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
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:hidden space-y-4 mt-4`}
                >
                    <li className="text-white">
                        <Link to="/">{language === 'es' ? "Panel" : "Dashboard"}</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/create">{language === 'es' ? "Producto" : "Product"}</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/stock">{language === 'es' ? "Depósito" : "Storage"}</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/settings">{language === 'es' ? "Ajustes" : "Settings"}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
