import userServices from "../../services/user.services"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap"
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard"
import purchaseServices from "../../services/purchase.services"
// import {useBalance} from './../../contexts/balance.context'


const UserProfilePage = () => {

    const [userData, setUserData] = useState({})
    const [purchaseData, setPurchaseData] = useState([])
    const { purchaseId } = useParams()
    const { userId } = useParams()
    const navigate = useNavigate()





    useEffect(() => {
        loadOneUser()
        renderPurchases()
    }, [])

    const loadOneUser = () => {
        userServices
            .getOneUser(userId)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    const renderPurchases = () => {

        purchaseServices
            .getAllPurchasesByUser()
            .then(({ data }) => setPurchaseData(data))
            .catch(err => console.log(err))
    }

    // const handleInputChange=(event)=>{
    //     let valueInput = event.target.value
    //     setInputBalance(valueInput)
    // }

    // const handleBtnChange = ()=>{
    //     let totalBalance = balance + inputBalance
    //     setBalance(totalBalance)
    // }




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

                {/* <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control
                            type="number"
                            name="inputTokens"
                            value={setInputBalance.inputTokens}
                            placeholder="Recipient's username"
                            // aria-label="Recipient's username"
                            // aria-describedby="basic-addon2"
                            onClick={handleInputChange}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={handleBtnChange}>add tokens</Button>
                        </InputGroup>
                    </Col>
                </Row> */}

                <Row>
                    <Col><h3>My experiences:</h3></Col>
                </Row>

                <Row>
                    {purchaseData.map(purchase => (

                        <Col key={purchase._id} md={4}>
                            <PurchaseCard purchase={purchase} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default UserProfilePage