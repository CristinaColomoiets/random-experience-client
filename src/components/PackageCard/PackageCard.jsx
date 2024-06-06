import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import './PackageCard.css';

const PackageCard = ({ _id: packageId, image, title, price, isLoggedIn }) => {
    return (

        <div className="packageCard">

            <Card className='mb-5 shadow-sm'>

                <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"}>
                    <Card.Img variant="top" src={image} />
                </Link>



                <Card.Body>

                    <Card.Title className='h1-primary'>{title}</Card.Title>
                    <Card.Text className="text-muted">From: ${price}</Card.Text>
                    <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"} className="btnFront">

                        <Button variant='gradient' className='w-100' disabled={!isLoggedIn}>
                            {
                                isLoggedIn ?
                                    "View Details" : < FaLock />
                            }
                        </Button>

                    </Link>

                    {isLoggedIn && (
                        <Row>

                            <Col className="d-flex">

                                <Link to={`/package/edit/${packageId}`} className="w-100">

                                    <Button className='w-100' variant="neutral">
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
