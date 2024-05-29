import { createContext, useEffect, useState } from "react"
import authServices from "../services/auth.services"

const AuthContext = createContext()


function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        setIsLoading(true)

        const token = localStorage.getItem('authToken')

        if (token) {

            authServices
                .verifyUser(token)
                .then(({ data }) => {
                    setLoggedUser(data)
                    setIsLoading(false)
                })
                .catch(err => logout())
        } else {
            logout()
        }
    }

    const logout = () => {
        setLoggedUser(null)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (

        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export { AuthContext, AuthProviderWrapper }