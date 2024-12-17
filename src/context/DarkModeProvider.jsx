/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(() => {
        const savedDarkmode = localStorage.getItem("darkmode")
        return savedDarkmode ? JSON.parse(savedDarkmode) : false
    })

    const toggleDarkmode = () => {
        setDarkmode((prev) => {
            const newMode = !prev
            localStorage.setItem("darkmode", JSON.stringify(newMode))
            return newMode
        })
    }

    useEffect(() => {
        if (darkmode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkmode])

    return (
        <DarkModeContext.Provider value={{ darkmode, toggleDarkmode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext)
