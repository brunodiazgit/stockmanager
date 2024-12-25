import { useDarkMode } from "../context/DarkModeProvider"
import { useLanguage } from "../context/LanguageProvider"

function Settings() {
    const { darkmode, toggleDarkmode } = useDarkMode()
    const {language, toggleLanguage} = useLanguage()


    return (
        <div className={`flex flex-col items-center gap-6 p-5`}>
            <h1 className="text-center text-2xl md:text-3xl m-3">{language === "es" ? "Ajustes" : "Settings"}</h1>
            <div className="flex items-center gap-4 text-lg md:text-xl">
                {language === "es" ? "Modo oscuro" : "Dark Mode"}
                <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${darkmode ? "bg-blue-800" : "bg-gray-300"}`}
                    onClick={toggleDarkmode}
                >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${darkmode ? "translate-x-6" : "translate-x-0"}`}
                    ></div>
                </div>
                <span>{darkmode ? "ON" : "OFF"}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-4 text-lg md:text-xl">
                {language === "en" ? "Spanish" : "Español"}
                <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${language === "es" ? "bg-blue-800" : "bg-gray-300"}`}
                    onClick={toggleLanguage}
                >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${language === "es" ? "translate-x-6" : "translate-x-0"}`}
                    ></div>
                </div>
                <span>{language === "es" ? "ON" : "OFF"}</span>
            </div>
        </div>
    )
}

export default Settings
