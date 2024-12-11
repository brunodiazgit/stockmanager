/* eslint-disable react/prop-types */

import { createContext, useContext } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AlertContext = createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
    const showAlert = ({ title, text, icon, confirmButtonText }) => {
        MySwal.fire({
            title: title || '¡Alerta!',
            text: text || 'Este es un mensaje de alerta.',
            icon: icon || 'info',
            confirmButtonText: confirmButtonText || 'Aceptar',
        })
    }

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
        </AlertContext.Provider>
    )
}
