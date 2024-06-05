import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import './PackageCard.css';
import { AuthContext } from '../../contexts/auth.context'
import { useContext} from 'react'



const PackageCard = ({ _id: packageId, image, title, price, isLoggedIn }) => {

  const { loggedUser} = useContext(AuthContext)

    return (

        <div className="packageCard">

            <Card className='mb-5 shadow-sm'>

                <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"}>
                    <Card.Img variant="top" src={image} />
                </Link>

                <Link to={isLoggedIn ? `/package/${packageId}` : "/profile/signup"} className="btnFront">

                    <Button variant='primary' disabled={!isLoggedIn}>
                        {
                            isLoggedIn ?
                                "View Details" : < FaLock />
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
                                    {
                                        loggedUser.role === 'ADMIN' &&

                                        <Button className=' btn-outline-dark' variant="neutral" size="sm">
                                            Edit
                                        </Button>
                                        
                                    }

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
