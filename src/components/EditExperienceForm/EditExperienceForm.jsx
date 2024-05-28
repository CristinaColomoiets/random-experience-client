import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import experiencesServices from '../../services/experiences.services';
const EditExpForm = () => {
    const initialState = {
        country: "",
        hotel: "",
        places: "",
        package: "",
        latitude: "",
        longitude: ""
    };
    const { experienceId } = useParams();
    const navigate = useNavigate();
    const [expData, setExpData] = useState(initialState);
    useEffect(() => {
        loadFormData();
    }, []);
    const loadFormData = () => {
        experiencesServices
            .getOneExperience(experienceId)
            .then(({ data }) => setExpData(data))
            .catch(err => console.log(err));
    };
    const handleInputChange = e => {
        const { name, value } = e.target;
        setExpData({ ...expData, [name]: value });
    };
    const handleFormSubmit = e => {
        e.preventDefault();
        experiencesServices
            .editExperience(experienceId, expData)
            .then(() => navigate(`/experiences/edit/${experienceId}`))
        // Deberia de llevar a ExperiencesList
        alert('¡Edited!')
            .catch(err => console.log(err))
    };
    const handleCancel = () => {
        setExpData(initialState)
    };
    const handleDelete = () => {
        experiencesServices
            .deleteExperience(experienceId)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    };
    return (
        <div className="editExpForm mt-5">
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
                        name="hotel"
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
                <hr />
                <Button variant="dark" type="submit" className="w-100 mb-4">
                    Apply Changes
                </Button>
                <Button variant="secondary" type="button" className="w-100 mb-4" onClick={handleCancel}>
                    Clear
                </Button>
                <Button variant="danger" type="button" className="w-100" onClick={handleDelete}>
                    Delete
                </Button>
            </Form>
        </div>
    );
};
export default EditExpForm;