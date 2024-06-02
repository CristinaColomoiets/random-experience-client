import { Card } from "react-bootstrap"

const PurchaseCard = ({ purchase }) => {

    return (

        <div className="purchaseCard">

            <Card>
                <Card.Body>
                    <Card.Title>Te vas de Viaje a: {purchase.experience.country}</Card.Title>
                    <Card.Text>En el Hotel: {purchase.experience.hotel}</Card.Text>
                    <Card.Text>
                        Podrás visitar de forma gratuita los siguientes lugares:
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