import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from "react-bootstrap";
import './PackageCard.css';

const PackageCard = ({ _id: packageId, image, title, price, isLoggedIn }) => {
    return (

        <div className="packageCard">

            <Card className='mb-5 shadow-sm'>

                <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"}>
                    <Card.Img variant="top" src={image} />
                </Link>

                <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"} className="btnFront">

                    <Button className='overlay-button btn-gradient' disabled={!isLoggedIn}>
                        {
                            isLoggedIn ?
                                "Go to View Details" : "🔒"
                        }
                    </Button>

                </Link>


                <Card.Body>

                    <Card.Title className='title mt-4'>{title}</Card.Title>
                    <Card.Text className="text-muted">From: ${price}</Card.Text>

                    {isLoggedIn && (
                        <Row>

                            <Col className="d-flex">

                                <Link to={`/package/edit/${packageId}`} className="w-100">

                                    <Button className=' btn-outline-dark' variant="light" size="sm">
                                        Edit
                                    </Button>

                                </Link>
                            </Col>

                        </Row>
                    )}

                </Card.Body>

            </Card>

        </div >
    );
};

export default PackageCard;
