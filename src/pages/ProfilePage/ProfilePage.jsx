import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const ProfilePage = () =>{

    const {logout} = useContext(AuthContext)

    return(
        <>
        <h1>ProfilePage</h1>
        <h3>SignUp</h3>
        <SignUpForm/>
        <h3>Login</h3>
        <LoginForm/>
        <Button onClick={logout}>Logout</Button>
        </>
    )
}
export default ProfilePage