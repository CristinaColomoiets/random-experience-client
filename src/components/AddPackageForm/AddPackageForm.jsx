import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
// const API_URL = import.meta.env.VITE_API_URL
const api = 'http://localhost:5005'


const AddPackageForm = () => {


    const initialState = {
        title: "",
        image: "",
        price: "",
        description: "",
    }

    const [newPackage, setNewPackage] = useState(initialState)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewPackage({ ...newPackage, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        axios

            .post(`${api}/api/package/addPackage`, newPackage)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        setNewPackage(initialState)
    }

    return (
        <div className="addPackageForm">

            <Form onSubmit={handleFormSubmit} className="mt-4">

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter a title for your new package"
                        name="title"
                        value={newPackage.title}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="introduce a sort description for your new Package"
                        name='description'
                        value={newPackage.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="introduce a image for your new Package"
                        name='image'
                        value={newPackage.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter a price for your new package"
                        name="price"
                        value={newPackage.price}
                        onChange={handleInputChange}
                    />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100 mb-4">
                    Submit
                </Button>

                <Button variant="secondary" type="submit" className="w-100" onClick={handleCancel}>
                    Cancel
                </Button>

            </Form>

        </div>
    );
}
export default AddPackageForm