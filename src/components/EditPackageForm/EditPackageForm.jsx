import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import packageServices from "../../services/packages.services"

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
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleDelete = () => {

        packageServices
            .deletePackage(packageId)
            .then(({ data }) => { setEditPackage(data) })
            .catch(err => console.log(err))
    }
    const handleClear = () => {
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
                    Apply Changes
                </Button>

                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleClear}>
                    Clear
                </Button>

                <Button variant="danger" type="button" className="w-100 mb-4" onClick={handleDelete}>
                    Delete
                </Button>



            </Form>

        </div>
    )
}
export default EditPackageForm