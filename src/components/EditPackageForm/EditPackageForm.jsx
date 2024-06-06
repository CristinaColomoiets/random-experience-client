import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import packageServices from "../../services/packages.services";
import { FaCheck, FaTimes, FaTrashAlt, FaBan } from 'react-icons/fa';
import './EditPackageForm.css';

const EditPackageForm = () => {
    const initialState = {
        title: "",
        price: "",
        image: "",
        sortDescription: "",
        extendedDescription: "",
    };

    const [editPackage, setEditPackage] = useState(initialState);
    const navigate = useNavigate();
    const { packageId } = useParams();

    useEffect(() => {
        fetchFormData();
    }, []);

    const fetchFormData = () => {
        packageServices
            .getOnePackage(packageId)
            .then(({ data }) => {
                setEditPackage(data);
            })
            .catch((err) => console.log(err));
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEditPackage({ ...editPackage, [name]: value });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        packageServices
            .putPackage(packageId, editPackage)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };

    const handleDelete = () => {
        packageServices
            .deletePackage(packageId)
            .then(({ data }) => {
                setEditPackage(data);
                navigate('/')
            })
            .catch(err => console.log(err));
    };

    const handleClear = () => {
        setEditPackage(initialState);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="EditPackageForm mt-5">
            <Form onSubmit={handleFormSubmit} className="mt-4">
                <Form.Group className="mb-3" controlId="title">
                    <Form.Control
                        type="text"
                        placeholder="Package title"
                        name="title"
                        value={editPackage.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="sortDescription">
                    <Form.Control
                        type="text"
                        placeholder="Short description"
                        name='sortDescription'
                        value={editPackage.sortDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="extendedDescription">
                    <Form.Control
                        type="text"
                        placeholder="Extended description"
                        name='extendedDescription'
                        value={editPackage.extendedDescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Control
                        type="url"
                        placeholder="Upload a image"
                        name='image'
                        value={editPackage.image}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Control
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={editPackage.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row className="mb-4">
                    <Col>
                        <Button variant="primary" type="submit" className="w-100">
                            Apply
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" type="button" className="w-100" onClick={handleClear}>
                            Clear
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="red" type="button" className="w-100" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>
                            <Button variant="neutral" type="button" className="w-100 mb-4" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default EditPackageForm;
