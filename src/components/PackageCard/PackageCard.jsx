import { Link, useParams } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"

const PackageCard = ({ _id, image, title, price }) => {

    const { packageId } = useParams()

    return (
        <div className="packageCard">
            {console.log(title)}

            <Link to={`/package/${_id}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <Button variant="primary">Go to view details</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div >

    )
}
export default PackageCard