import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import authServices from "../../services/auth.services"
import { Form, Button} from "react-bootstrap"


const LoginForm = ()=>{

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const {authenticateUser} = useContext(AuthContext)

    const handleInputChange = (event) =>{
        const {value, name} = event.target
        setLoginData({...loginData, [name]: value})
    }

    const handleSubmit = event =>{
        event.preventDefault()

        authServices
            .loginUser(loginData)
            .then(({data})=>{ // data es token

                const newTokenGenerated = data.authToken
                localStorage.setItem('authToken', newTokenGenerated)
    
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }



    return(
        
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Control 
                type="email" 
                placeholder="Enter your email please"
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

            <div className="d-grid">
                <Button variant="dark" type="submit">Enter</Button>
            </div>
        </Form>
    )
}
export default LoginForm