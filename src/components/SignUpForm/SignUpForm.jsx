import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from 'react-bootstrap'
import authServices from './../../services/auth.services'
import uploadServices from '../../services/upload.services'
import { toast } from "sonner"

const SignUpForm = () => {

    const [signupData, setSignupData] = useState({

        email: '',
        password: '',
        username: '',
        image: ''
    });

    const [imagePreview, setImagePreview] = useState('')

    const navigate = useNavigate()

    const handleFormSubmit = event => {

        event.preventDefault()

        authServices.signupUser(signupData)

            .then(() => {
                toast.success('User registration has been a success!')
                navigate('/profile/login')
            })
            .catch(err => {
                console.log(err)
                toast.warning('There was an error with user registration')
            })
    }

    const handleInputChange = event => {

        const { value, name } = event.target

        setSignupData({ ...signupData, [name]: value })
    }

    const handleFileUpload = e => {

        const formData = new FormData()

        formData.append('imageData', e.target.files[0])

        uploadServices.uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, image: data.cloudinary_url })
                setImagePreview(data.cloudinary_url)
                toast.success('Avatar uploaded!')
            })
            .catch(err => {
                console.log(err)
                toast.warning('Something went wrong with the avatar upload')
            })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={signupData.email}
                    name="email"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    name="password"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={signupData.username}
                    name="username"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control
                    type="file"
                    placeholder="Upload your profile image"
                    name="image"
                    onChange={handleFileUpload}
                />
                {imagePreview && (
                    <div className="mt-3">
                        <img src={imagePreview} alt="Profile Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    </div>
                )}
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Submit</Button>
            </div>
        </Form>
    )
}
export default SignUpForm
