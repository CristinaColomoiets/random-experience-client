import { Form, Button } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const apiURL = 'http://localhost:5005'


const AddExpForm = () => {

    const initialState = {
        country: "",
        hotel: "",
        places: "",
        package: "",
        latitude: "",
        longitude: ""
    }

    const [newExp, setNewExp] = useState(initialState)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const {
            name,
            value } = e.target
        setNewExp({ ...newExp, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        axios

            .post(`${apiURL}/api/experiences/`, newExp)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        setNewExp(initialState)
    }

    return (
        <div className="addExpForm">

            <Form onSubmit={handleFormSubmit} className="mt-4">

                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        name="country"
                        value={newExp.country}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="hotel">
                    <Form.Label>Hotel</Form.Label>
                    <Form.Control
                        type="text"
                        name='hotel'
                        value={newExp.hotel}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="places">
                    <Form.Label>Places</Form.Label>
                    <Form.Control
                        type="text"
                        name="places"
                        value={newExp.places}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="package">
                    <Form.Label>Package</Form.Label>
                    <Form.Control
                        type="text"
                        name="package"
                        value={newExp.package}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="latitude">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                        type="text"
                        name="latitude"
                        value={newExp.latitude}
                        onChange={handleInputChange}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="longitude">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                        type="text"
                        name="longitude"
                        value={newExp.longitude}
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

                <Link to='/'><Button variant="danger" type="button" className="w-100" onClick={handleCancel}>
                    Cancel
                </Button></Link>

            </Form>

        </div>
    );
}
export default AddExpForm