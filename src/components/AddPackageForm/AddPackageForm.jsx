import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import packageServices from "../../services/packages.services"
import uploadServices from "../../services/upload.services"
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
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter a title for your new package"
                        name="title"
                        value={newPackage.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter a short description for your new package"
                        name="sortDescription"
                        value={newPackage.sortDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="extendedDescription">
                    <Form.Label>Extended Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter an extended description for your new package"
                        name="extendedDescription"
                        value={newPackage.extendedDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
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
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter a price for your new package"
                        name="price"
                        value={newPackage.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 mb-4">
                    Submit
                </Button>

                <Button
                    variant="secondary"
                    type="button"
                    className="w-100 mb-4"
                    onClick={handleCancel}
                >
                    Clear
                </Button>

                <Link to='/'>
                    <Button
                        variant="dark"
                        type="button"
                        className="w-100"
                    >
                        Cancel
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default AddPackageForm
