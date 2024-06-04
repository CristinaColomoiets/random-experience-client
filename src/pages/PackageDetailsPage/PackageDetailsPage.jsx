import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import purchaseServices from "../../services/purchase.services";
import packageServices from "../../services/packages.services";
import { AuthContext } from "../../contexts/auth.context";
import { useContext, useEffect, useState } from "react";
import { BalanceContext } from "../../contexts/balance.context";
import "./PackageDetailsPage.css";

const PackageDetailsPage = () => {
    const { balance, spendFunds } = useContext(BalanceContext);
    const [packages, setPackages] = useState({});
    const { packageId } = useParams();
    const navigate = useNavigate();
    const { loggedUser } = useContext(AuthContext);

    useEffect(() => {
        loadOnePackage();
    }, []);

    const handlePurchase = () => {
        purchaseServices
            .postPurchase({ package: packageId })
            .then(() => {
                spendFunds(packages.price);
                navigate(`/profile/${loggedUser._id}`);
            })
            .catch(err => console.log(err));
    };

    const loadOnePackage = () => {
        packageServices
            .getOnePackage(packageId)
            .then(({ data }) => {
                setPackages(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="PackageDetailsPage">
            <Container>

                <Row className="my-4">

                    <Col md={6}>
                        <Image src={packages.image} fluid rounded className="package-image" />
                    </Col>

                    <Col md={6}>
                        <h1>{packages.title}</h1>
                        <h3 className="text-muted">${packages.price}</h3>
                        <p>{packages.sortDescription}</p>
                        <p>{packages.extendedDescription}</p>

                        <Button
                            variant="primary"
                            type="button"
                            className="w-100 mt-3"
                            onClick={handlePurchase}
                            disabled={balance < packages.price}
                        >
                            Buy your Experience
                        </Button>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PackageDetailsPage;
