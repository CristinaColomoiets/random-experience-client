import { Card, Col, Row } from "react-bootstrap";
import './PurchaseCard.css';

const PurchaseCard = ({ purchase }) => {
    return (
        <div className="purchaseCard">
            <Card className="horizontal-card">
                <Row className="no-gutters">
                    <Col md={4} className="image-col">
                        <div className="image-container">
                            <Card.Img className="experience-image" src={purchase.experience.imageUrl} alt="experience image" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <h1 className="h1-neutral">You are going to visit: <span className="h1-gradient">{purchase.experience.country}</span></h1>
                            <Card.Text className="hotel-name">You are going to stay in: {purchase.experience.hotel}</Card.Text>
                            <Card.Text>
                                You will see places like:
                                <ul className="places-list">
                                    {purchase.experience.places.map((eachPlace, index) => (
                                        <li key={index}>{eachPlace}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default PurchaseCard;
