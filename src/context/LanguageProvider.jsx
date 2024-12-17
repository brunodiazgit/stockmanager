/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem("language")
        return savedLanguage ? JSON.parse(savedLanguage) : "en"
    })

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLanguage = prev === "en" ? "es" : "en"
            localStorage.setItem("language", JSON.stringify(newLanguage))
            return newLanguage
        })
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
