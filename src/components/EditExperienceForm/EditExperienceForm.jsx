import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import experiencesServices from '../../services/experiences.services'

const EditExpForm = () => {
    const navigate = useNavigate()
    const { expId } = useParams()

    const [expData, setExpData] = useState({
        country: "",
        hotel: "",
        places: "",
        package: "",
        latitude: "",
        longitude: ""
    });

    useEffect(() => {
        loadFormData()
    }, []);

    const loadFormData = () => {
        axios
            .get(`${API_URL}/api/experiences/${expId}`)
            .then(({ data }) => setExpData(data))
            .catch(err => console.log(err))
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setExpData({ ...expData, [name]: value })
    };

    const handleFormSubmit = e => {
        e.preventDefault();

        editExperience
        axios
            .put(`${API_URL}/api/experiences/${expId}`, expData)
            .then(() => navigate(`/experiences/${expId}`))
            .catch(err => console.log(err))
    };

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/api/experiences/${expId}`)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    };

    return (
        <div className='EditExpForm mt-5'>
            <Form onSubmit={handleFormSubmit} className="mt-4">
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        name="country"
                        value={expData.country}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hotel">
                    <Form.Label>Hotel</Form.Label>
                    <Form.Control
                        type="text"
                        name='hotel'
                        value={expData.hotel}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="places">
                    <Form.Label>Places</Form.Label>
                    <Form.Control
                        type="text"
                        name="places"
                        value={expData.places}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="package">
                    <Form.Label>Package</Form.Label>
                    <Form.Control
                        type="text"
                        name="package"
                        value={expData.package}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="latitude">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control
                        type="text"
                        name="latitude"
                        value={expData.latitude}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="longitude">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control
                        type="text"
                        name="longitude"
                        value={expData.longitude}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-50">
                    Apply Edition
                </Button>

                <Button variant="danger" type="button" className="w-50" onClick={handleDelete}>
                    Delete
                </Button>
            </Form>
        </div>
    );
};

export default EditExpForm
