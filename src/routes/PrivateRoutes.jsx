import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"
import Loader from "../components/Loader/Loader"

const PrivateRoutes = () => { //{onlyAdmin}

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    // if(loggedUser.role != 'ADMIN' && onlyAdmin === true){
    //     return <Navigate to="/"/>
    // }

    if (!loggedUser) {
        return <Navigate to="/profile/signup" />
    }

    return <Outlet />
}

export default PrivateRoutes