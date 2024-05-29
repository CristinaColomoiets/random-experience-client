import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import authServices from './../../services/auth.services'

const SignUpForm = () => {

    const [singupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',
        image: ''
    })

    const navigate = useNavigate()

    const handleFormSubmit = event => {
        event.preventDefault()

        authServices
            .signupUser(singupData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleIputChange = event => {
        const { value, name } = event.target
        setSignupData({ ...singupData, [name]: value })
    }

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Enter your email please"
                value={singupData.email}
                name="email"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                type="password" 
                placeholder="Password"
                value={singupData.password}
                name="password"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control 
                type="text" 
                placeholder="Username"
                value={singupData.username}
                name="username"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control 
                type="text" 
                placeholder="Add your profile image please" 
                value={singupData.image}
                name="image"
                onChange={handleIputChange}
                />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Submit</Button>
            </div>
        </Form>
    )
}
export default SignUpForm