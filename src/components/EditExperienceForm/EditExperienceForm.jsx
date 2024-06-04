import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import GeoForm from "../GeoForm/GeoForm"
import LocationMap from "../LocationMap/LocationMap"
import experiencesServices from '../../services/experiences.services'
import uploadServices from '../../services/upload.services'
import { toast } from 'sonner'
import './EditExperienceForm.css'
import { Modal } from "react-bootstrap"

const EditExpForm = () => {

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

    const { experienceId } = useParams()
    const navigate = useNavigate()
    const [expData, setExpData] = useState(initialState)
    const [imagePreview, setImagePreview] = useState('')
    const [imageLink, setImageLink] = useState('')

    useEffect(() => {
        loadFormData()
    }, [])

    const loadFormData = () => {
        experiencesServices
            .getOneExperience(experienceId)
            .then(({ data }) => {
                setExpData(data)
                setImagePreview(data.imageUrl)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setExpData({ ...expData, [name]: value })
    }

    const handleImageLinkChange = e => {
        setImageLink(e.target.value)
    }

    const handleAddImageLink = () => {
        setExpData({ ...expData, imageLinks: [...expData.imageLinks, imageLink] })
        setImageLink('')
        toast.info('Image URL added')
    }

    const handleRemoveImageLink = (index) => {
        const updatedImageLinks = expData.imageLinks.filter((_, i) => i !== index)
        setExpData({ ...expData, imageLinks: updatedImageLinks })
        toast.info('Image URL removed')
    }

    const handleLocationSelect = (location) => {
        setExpData({
            ...expData,
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
                setExpData({ ...expData, imageUrl: data.cloudinary_url })
                setImagePreview(data.cloudinary_url)
                toast.info('Cover image added')
            })
            .catch(err => {
                console.log(err)
                toast.error('Cover image uploading failed')
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        experiencesServices.editExperience(experienceId, expData)
            .then(() => {
                toast.success('Experience edited successfully!')
                navigate(`/experiences/all`)
            })
            .catch(err => console.log(err))
    }

    const handleClear = () => {
        setExpData(initialState)
        setImagePreview('')
        toast.info('Fields have been cleared')
    }

    const handleCancel = () => {
        toast.info('Operation cancelled')
        navigate('/experiences/all')
    }

    const handleDelete = () => {
        experiencesServices.deleteExperience(experienceId)
            .then(() => {
                toast.success('Experience deleted successfully!')
                navigate('/experiences/all')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="editExpForm mt-5">
            <Form onSubmit={handleFormSubmit} className="mt-4">
                <GeoForm onLocationSelect={handleLocationSelect} initialAddress={expData.geocode} />
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="latitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control
                                type="number"
                                name="latitude"
                                value={expData.location.coordinates[1]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control
                                type="number"
                                name="longitude"
                                value={expData.location.coordinates[0]}
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {expData.location.coordinates.length > 0 && (
                    <LocationMap address={{ latitude: expData.location.coordinates[1], longitude: expData.location.coordinates[0] }} />
                )}

                <Form.Group className="mb-3" controlId="package">
                    <Form.Label>PackageID</Form.Label>
                    <Form.Control
                        type="text"
                        name="package"
                        value={expData.package}
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
                                value={expData.country}
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
                                value={expData.hotel}
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
                        value={expData.places}
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
                    {expData.imageLinks.map((link, index) => (
                        <li key={index} className="image-link-item">
                            <Button variant="danger" size="sm" onClick={() => handleRemoveImageLink(index)} className="remove-button">Remove</Button>
                            <span className="image-link-text">{link}</span>
                        </li>
                    ))}
                </ul>

                <Button variant="gradient" type="submit" className="w-100 mb-4">
                    Apply Changes
                </Button>
                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleClear}>
                    Clear
                </Button>
                <Link to='/'>
                    <Button variant="neutral" type="button" className="w-100 mb-4" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Link>
                <Button variant="red" type="button" className="w-100 mb-4" onClick={handleDelete}>
                    Delete
                </Button>
            </Form>
        </div>
    )
}

export default EditExpForm
