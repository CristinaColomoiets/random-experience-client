import { Form, Button } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import GeoForm from "../GeoForm/GeoForm"
import experiencesServices from '../../services/experiences.services'

const AddExpForm = () => {

    const initialState = {
        country: "",
        hotel: "",
        places: "",
        package: "",
        location: {
            type: "Point",
            coordinates: []
        },
        geocode: ""
    }

    const [newExp, setNewExp] = useState(initialState)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewExp({ ...newExp, [name]: value })
    }

    const handleLocationSelect = (location) => {
        setNewExp({
            ...newExp,
            location: {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            },
            geocode: location.address
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        experiencesServices
            .createExperience(newExp)
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

                <GeoForm onLocationSelect={handleLocationSelect} />

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={newExp.geocode}
                        readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="latitude">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                        type="number"
                        name="latitude"
                        value={newExp.location.coordinates[1]}
                        readOnly
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="longitude">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                        type="number"
                        name="longitude"
                        value={newExp.location.coordinates[0]}
                        readOnly
                    />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100 mb-4">
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
    )
}

export default AddExpForm
