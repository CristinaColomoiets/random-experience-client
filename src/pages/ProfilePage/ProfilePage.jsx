import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="ProfilePage">
            <h1>ProfilePage</h1>
        </div>
    )
}
export default ProfilePage