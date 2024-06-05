import { Card } from "react-bootstrap"

const PurchaseCard = ({ purchase }) => {

    return (

        <div className="purchaseCard">

            <Card>
                <Card.Body>
                    <Card.Title>You are going to visit: {purchase.experience.country}</Card.Title>
                    <Card.Text>You are going to stay in: {purchase.experience.hotel}</Card.Text>
                    <Card.Text>
                        You will see places like:
                        <ul>
                            {purchase.experience.places.map((eachPlace, index) => (
                                <li key={index}>{eachPlace}</li>
                            ))}
                        </ul>
                    </Card.Text>
                    <Card.Img variant="top" src={purchase.experience.imageUrl} alt="experience image" />
                </Card.Body>
            </Card>

        </div>
    )
}
export default PurchaseCard