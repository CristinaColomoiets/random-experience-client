import userServices from "../../services/user.services"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap"
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard"
import purchaseServices from "../../services/purchase.services"


const UserProfilePage = () => {

    const [userData, setUserData] = useState({})
    const [purchaseData, setPurchaseData] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        loadOneUser()
        renderPurchases()
    }, [])

    const loadOneUser = () => {             // TODO la ruta de API no existe
        userServices
            .getLoggedUser()
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    const renderPurchases = () => {
        purchaseServices
            .getAllPurchasesByUser()
            .then(({ data }) => setPurchaseData(data))
            .catch(err => console.log(err))
    }



    return (
        <div className="ProfilePage">
            <Container>
                <h1>ProfilePage</h1>
                <Row>
                    <Col md={{ span: 3 }}>
                        <img src={userData.image} alt="profile photo" />
                    </Col>
                    <Col md={{ span: 6 }}>
                        <h3>Name: {userData.username}</h3>
                        <h4>Your balance: {userData.balance} tokens</h4>
                    </Col>
                </Row>

                <Row>
                    <Col><h3>My experiences:</h3></Col>
                </Row>

                <Row>
                    {
                        purchaseData.map(purchase => (

                            <Col key={purchase._id} md={4}>
                                <PurchaseCard purchase={purchase} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
export default UserProfilePage