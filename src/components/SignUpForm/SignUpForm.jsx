import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import authServices from './../../services/auth.services'




const SignUpForm = ()=>{

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
            .then(()=>navigate('/'))
            .catch(err => console.log(err))
    }

    const handleIputChange = event =>{
        const {value, name} = event.target
        setSignupData({...singupData, [name]: value})
    }

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter your email please"
                value={singupData.email}
                name="email"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                value={singupData.password}
                name="password"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Username"
                value={singupData.username}
                name="username"
                onChange={handleIputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Add your profile image please" 
                value={singupData.image}
                name="image"
                onChange={handleIputChange}
                />
            </Form.Group>
  
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default SignUpForm