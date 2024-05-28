import { createContext, useEffect, useState } from "react"
import authServices from "../services/auth.services"

const AuthContext = createContext()


function AuthProviderWrapper(props) {
    
    const [loggedUser, setLoggedUser] = useState(null)
    
    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {

            authServices
                .verifyUser(token)
                .then(({ data }) => setLoggedUser(data))
                .catch(err => logout())
        } else {
            logout()
        }
    }

    const logout = () => {
        setLoggedUser(null)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }