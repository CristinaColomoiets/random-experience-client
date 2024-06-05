import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import userServices from "../../services/user.services";
import purchaseServices from "../../services/purchase.services";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import { BalanceContext } from "../../contexts/balance.context";
import "./UserProfilePage.css";

const UserProfilePage = () => {
    const { balance, getBalance } = useContext(BalanceContext);
    const [userData, setUserData] = useState({});
    const [purchaseData, setPurchaseData] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        loadOneUser();
        renderPurchases();
        getBalance();
    }, []);

    const loadOneUser = () => {
        userServices
            .getLoggedUser(userId)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err));
    };

    const renderPurchases = () => {
        purchaseServices
            .getAllPurchasesByUser()
            .then(({ data }) => setPurchaseData(data))
            .catch(err => console.log(err));
    };

    return (
        <div className="UserProfilePage">
            <Container>
                <h1 className="mt-4">ProfilePage</h1>
                <Row className="mt-4">
                    <Col md={3}>
                        <Image src={userData.image} alt="profile photo" fluid rounded className="profile-image" />
                    </Col>
                    <Col md={6}>
                        <h3>Name: {userData.username}</h3>
                        <h4>Your balance: {balance} tokens</h4>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col><h3>My experiences:</h3></Col>
                </Row>

                <Row className="mt-4">
                    {purchaseData.map(purchase => (
                        <Col key={purchase._id} md={4}>
                            <PurchaseCard purchase={purchase} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default UserProfilePage;
