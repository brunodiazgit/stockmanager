import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageProvider"

function NavBar2() {
    const { language } = useLanguage()

    return (
        <nav className="hidden md:block min-h-screen">
            <ul className="flex flex-col h-full items-start lg:text-xl p-10 w-52 lg:w-64 gap-12 bg-zinc-900 text-white">
                <Link className="flex gap-2 items-center hover:text-orange-400 " to={'/'}> <img style={{height:'2rem'}} src="./dashboard.png" alt="" />{language  === 'es' ? "Panel" : "Dashboard"}</Link>
                <Link className="flex gap-2 items-center hover:text-orange-400" to={'/create'}> <img style={{height:'2rem'}} src="./add.png" alt="" />{language  === 'es' ? "Producto" : "Product"}</Link>
                <Link className="flex gap-2 items-center hover:text-orange-400" to={'/stock'}> <img style={{height:'2rem'}} src="./folder.png" alt="" />{language  === 'es' ? "Depósito" : "Storage"}</Link>
                <Link className="flex gap-2 items-center hover:text-orange-400" to={'/settings'}> <img style={{height:'2rem'}} src="./settings.png" alt="" />{language  === 'es' ? "Ajustes" : "Settings"}</Link>
            </ul>
        </nav>
    )
}

export default NavBar2