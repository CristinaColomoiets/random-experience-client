import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import authServices from "../../services/auth.services"
import { Form, Button } from "react-bootstrap"
import { toast } from "sonner"

const LoginForm = ({ setShowLoginModal }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        authServices
            .loginUser(loginData)
            .then(({ data }) => {

                const newTokenGenerated = data.authToken
                localStorage.setItem('authToken', newTokenGenerated)

                authenticateUser()
                navigate('/')
                toast.success('Successful login')
            })
            .catch(err => {
                console.log(err)
                toast.error('Login failed')

            })
    }

    const handleButtonClick = () => {
        setShowLoginModal(false);
    };



    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                    name="email"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    name="password"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group>
                <Link to='/profile/signup'>
                    <p onClick={handleButtonClick}>Not registered yet?</p>
                </Link>
            </Form.Group>

            <div className="d-grid">
                <Button variant="primary" type="submit">Enter</Button>
            </div>
        </Form >
    )
}
export default LoginForm