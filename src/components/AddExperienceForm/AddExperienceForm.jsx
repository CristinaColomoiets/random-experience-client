import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import GeoForm from "../GeoForm/GeoForm"
import LocationMap from "../LocationMap/LocationMap"
import experiencesServices from '../../services/experiences.services'
import uploadServices from '../../services/upload.services'
import { toast } from 'sonner'
import './AddExperienceForm.css'

const AddExpForm = () => {

    const initialState = {
        country: "",
        hotel: "",
        places: "",
        package: "",
        imageUrl: "",
        imageLinks: [],
        location: {
            type: "Point",
            coordinates: []
        },
        geocode: ""
    }

    const [newExp, setNewExp] = useState(initialState)
    const [imagePreview, setImagePreview] = useState('')
    const [imageLink, setImageLink] = useState('')
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewExp({ ...newExp, [name]: value })
    }

    const handleImageLinkChange = e => {
        setImageLink(e.target.value)
    }

    const handleAddImageLink = () => {
        setNewExp({ ...newExp, imageLinks: [...newExp.imageLinks, imageLink] })
        setImageLink('')
        toast.info('Image URL added')
    }

    const handleRemoveImageLink = (index) => {
        const updatedImageLinks = newExp.imageLinks.filter((_, i) => i !== index)
        setNewExp({ ...newExp, imageLinks: updatedImageLinks })
        toast.info('Image URL removed')
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

    const handleFileUpload = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices.uploadimage(formData)
            .then(({ data }) => {
                setNewExp({ ...newExp, imageUrl: data.cloudinary_url })
                setImagePreview(data.cloudinary_url)
                toast.info('Cover image uploaded')
            })
            .catch(err => {
                console.log(err)
                toast.error('Cover image upload failed')
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        experiencesServices.createExperience(newExp)
            .then(() => {
                toast.success('Experience created successfully!')
                navigate('/experiences/all')
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong with the experience creation')
            })
    }

    const handleClear = () => {
        setNewExp(initialState)
        setImagePreview('')
        toast.info('Fields have been cleared')
    }

    const handleCancel = () => {
        toast.info('Operation cancelled')
        navigate('/experiences/all')
    }

    return (
        <div className="addExpForm">
            <Form onSubmit={handleFormSubmit} className="mt-3">
                <GeoForm onLocationSelect={handleLocationSelect} />
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="latitude">
                            <Form.Control
                                type="number"
                                name="latitude"
                                placeholder="Waiting for an address to display the latitude"
                                value={newExp.location.coordinates[1]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Control
                                type="number"
                                name="longitude"
                                placeholder="Waiting for an address to display the latitude"
                                value={newExp.location.coordinates[0]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {newExp.location.coordinates.length > 0 && (
                    <LocationMap address={{ latitude: newExp.location.coordinates[1], longitude: newExp.location.coordinates[0] }} />
                )}

                <Form.Group className="mb-3" controlId="package">
                    <Form.Label>PackageID</Form.Label>
                    <Form.Control
                        type="text"
                        name="package"
                        value={newExp.package}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                name="country"
                                value={newExp.country}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="hotel">
                            <Form.Label>Hotel name</Form.Label>
                            <Form.Control
                                type="text"
                                name='hotel'
                                value={newExp.hotel}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="places">
                    <Form.Label>Places to see</Form.Label>
                    <Form.Control
                        type="text"
                        name="places"
                        value={newExp.places}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="imageUrl"
                                onChange={handleFileUpload}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="imageLinks">
                            <Form.Label>Image URLS</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image URL"
                                        value={imageLink}
                                        onChange={handleImageLinkChange}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="secondary" onClick={handleAddImageLink} className="mt-2">Add Image Link</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>

                <ul className="image-links-list">
                    {newExp.imageLinks.map((link, index) => (
                        <li key={index} className="image-link-item">
                            <Button variant="danger" size="sm" onClick={() => handleRemoveImageLink(index)} className="remove-button">Remove</Button>
                            <span className="image-link-text">{link}</span>
                        </li>
                    ))}
                </ul>
                <Button variant="success" type="submit" className="w-100 mb-4">
                    Submit
                </Button>
                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleClear}>
                    Clear
                </Button>
                <Link to='/'><Button variant="dark" type="button" className="w-100 mb-4" onClick={handleCancel}>
                    Cancel
                </Button></Link>
            </Form>
        </div>
    )
}

export default AddExpForm
