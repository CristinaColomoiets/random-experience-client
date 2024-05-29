import { Link, useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"

const PackageCard = ({ _id: packageId, image, title, price }) => {


    return (

        <div className="packageCard">

            <Link to={`/package/${packageId}`}>

                <Card >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Button variant="primary">Go to view details</Button>

                    </Card.Body>
                </Card>

            </Link>

        </div >

    )
}
export default PackageCard