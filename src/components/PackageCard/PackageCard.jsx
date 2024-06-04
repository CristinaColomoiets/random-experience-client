import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from "react-bootstrap";

const PackageCard = ({ _id: packageId, image, title, price, isLoggedIn }) => {
    return (
        <div className="packageCard">
            <Card className='mb-5'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>From: {price}</Card.Text>

                    <Row>
                        <Col>
                            <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"}>

                                <Button className='w-100'
                                    variant={isLoggedIn ? "primary" : "secondary"}
                                    disabled={!isLoggedIn}>
                                    {isLoggedIn ? "Go to view details" : "🔒"}
                                </Button>

                            </Link>
                        </Col>

                        {isLoggedIn && (
                            <Col>
                                <Link to={`/package/edit/${packageId}`}>

                                    <Button className='w-100' variant="success">
                                        {price}
                                    </Button>

                                </Link>
                            </Col>
                        )}

                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PackageCard;
