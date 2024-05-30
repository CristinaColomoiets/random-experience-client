import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import userServices from '../../services/user.services'
import { Form, Button } from "react-bootstrap"



const EditUserProfileForm = ()=>{

    const [userData, setUserData] = useState({
        email: '',
        username: '',
        image: ''
    })

    const navigate = useNavigate()
    const {userId} = useParams()

    useEffect(()=>{
        loadUserProfile()
    }, [])

    const loadUserProfile = () =>{

        userServices
            .getOneUser(userId)
            .then(({data})=>{setUserData(data)})
            .catch((error) => console.log(error))
    }


    const handleInputChange = event => {
        const {name, value} = event.target
        setUserData({...userData, [name]: value})
    }

    const handleFormSubmit = event =>{
        event.preventDefault()

        userServices
            .editUser(userId, userData)
            .then(()=> navigate(`/profile/${userId}`))
            .catch((error) => console.log(error))
    }



    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Enter your new email please"
                value={userData.email}
                name="email"
                onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control 
                type="text" 
                placeholder="Put your new username"
                value={userData.username}
                name="username"
                onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control 
                type="text" 
                placeholder="Add your new profile image please" 
                value={userData.image}
                name="image"
                onChange={handleInputChange}
                />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Edit</Button>
            </div>
        </Form>
    )
}

export default EditUserProfileForm