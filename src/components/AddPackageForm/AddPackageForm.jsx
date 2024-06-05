import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import packageServices from "../../services/packages.services"
import uploadServices from "../../services/upload.services"
import './../AddPackageForm/AddPackageForm.css'
import { toast } from "sonner"

const AddPackageForm = () => {

    const initialState = {
        title: "",
        price: "",
        image: "",
        sortDescription: "",
        extendedDescription: ""
    }

    const [newPackage, setNewPackage] = useState(initialState)
    const [imagePreview, setImagePreview] = useState('')
    const navigate = useNavigate()


    const handleInputChange = e => {
        const { name, value } = e.target
        setNewPackage({ ...newPackage, [name]: value })
    }


    const handleFileUpload = e => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices.uploadimage(formData)
            .then(({ data }) => {
                setNewPackage({ ...newPackage, image: data.cloudinary_url })
                setImagePreview(data.cloudinary_url)
                toast.info('Image uploaded!')
            })
            .catch(err => console.log(err))
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        packageServices
            .savePackage(newPackage)
            .then(() => {
                navigate('/')
                toast.success('Package created successfully!')
            })
            .catch(err => {
                console.log(err)
                toast.error(`Something went wrong with the package creation ${err}`)
            })
    }


    const handleCancel = () => {
        setNewPackage(initialState)
        toast.info('Fields have been cleared')
    }

    return (
        <div className="AddPackageForm">
            <Form onSubmit={handleFormSubmit} className="mt-4">

                <Form.Group className="mb-3" controlId="title">
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={newPackage.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sortDescription">
                    <Form.Control
                        type="text"
                        placeholder="Short description"
                        name="sortDescription"
                        value={newPackage.sortDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="extendedDescription">
                    <Form.Control
                        type="text"
                        placeholder="Extended description"
                        name="extendedDescription"
                        value={newPackage.extendedDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Control
                        type="file"
                        placeholder="Upload an image for your new package"
                        name="image"
                        onChange={handleFileUpload}
                    />
                    {imagePreview && (
                        <div className="mt-3">
                            <img
                                src={imagePreview}
                                alt="Package Preview"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Control
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={newPackage.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Button variant="primary" type="submit" className="w-100 mb-4">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="secondary"
                            type="button"
                            className="w-100 mb-4"
                            onClick={handleCancel}
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>
                            <Button
                                variant="neutral"
                                type="button"
                                className="w-100 mb-4"
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddPackageForm
