import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import packageServices from "../../services/packages.services"
// const API_URL = import.meta.env.VITE_API_URL
const api = 'http://localhost:5005'

const EditPackageForm = () => {

    const initialState = {
        title: "",
        price: "",
        image: "",
        description: "",
    }

    const [editPackage, setEditPackage] = useState(initialState)

    const navigate = useNavigate()

    const { packageId } = useParams()

    useEffect(() => {
        fetchFormData()
    }, [])

    const fetchFormData = () => {

        packageServices
            .getOnePackage(packageId)
            .then(({ data }) => {
                setEditPackage(data)

            })
            .
            catch((err) => console.log(err))
    }


    const handleInputChange = e => {
        const { name, value } = e.target
        setEditPackage({ ...editPackage, [name]: value })
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        packageServices
            .putPackage(packageId, editPackage)
            // .put(`${api}/api/packages/${packageId}`, editPackage)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        setEditPackage(initialState)
    }

    return (
        <div className="editPackageForm">

            <Form onSubmit={handleFormSubmit} className="mt-4">

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter a title for your new package"
                        name="title"
                        value={editPackage.title}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="introduce a sort description for your new Package"
                        name='description'
                        value={editPackage.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="introduce a image for your new Package"
                        name='image'
                        value={editPackage.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter a price for your new package"
                        name="price"
                        value={editPackage.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <hr />
                <Button variant="dark" type="submit" className="w-100 mb-4">
                    Submit
                </Button>

                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleCancel}>
                    delete
                </Button>

                <Link to='/'>
                    <Button variant="danger" type="button" className="w-100" onClick={handleCancel}>
                        Cancel
                    </Button>

                </Link>
            </Form>

        </div>
    )
}
export default EditPackageForm