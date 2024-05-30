import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import packageServices from "../../services/packages.services"


const AddPackageForm = () => {


    const initialState = {
        title: "",
        price: "",
        image: "",
        sortDescription: "",
        extendedDescription: ""
    }

    const [newPackage, setNewPackage] = useState(initialState)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewPackage({ ...newPackage, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        packageServices
            .savePackage(newPackage)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        setNewPackage(initialState)
    }

    return (

        <div className="AddPackageForm">

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

                <Form.Group className="mb-3" controlId="sortDescription">
                    <Form.Label>Sort Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="introduce a sort description for your new Package"
                        name='sortdescription'
                        value={newPackage.sortDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="extendedDescription">
                    <Form.Label> Extended Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="introduce a extended description for your new Package"
                        name='extendedDescription'
                        value={newPackage.extendedDescription}
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
                <hr />
                <Button variant="dark" type="submit" className="w-100 mb-4" onClick={handleFormSubmit}>
                    Submit
                </Button>

                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleCancel}>
                    Clear
                </Button>

                <Link to='/'>
                    <Button variant="danger" type="button" className="w-100" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Link>
            </Form>

        </div>
    );
}
export default AddPackageForm