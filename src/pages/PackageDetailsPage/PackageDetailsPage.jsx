import { Container, Button, Row, Col, Image } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"
import packageServices from "../../services/packages.services"
import { AuthContext } from "../../contexts/auth.context"
import { useContext, useEffect, useState } from "react"
import { BalanceContext } from "../../contexts/balance.context"
import "./PackageDetailsPage.css"

const PackageDetailsPage = () => {
    const { balance, spendFunds } = useContext(BalanceContext)
    const [packages, setPackages] = useState({})
    const { packageId } = useParams()
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)

    const icon1 = "https://res.cloudinary.com/drpdy7tju/image/upload/v1717658941/descarga_wmzfc3.png"
    const icon2 = "https://res.cloudinary.com/drpdy7tju/image/upload/v1717658940/our-identity-1.q55BdGC-_p4k8ws.png"
    const icon3 = "https://res.cloudinary.com/drpdy7tju/image/upload/v1717658940/our-identity-2.ssGdDlql_qcf6dj.png"
    const icon4 = "https://res.cloudinary.com/drpdy7tju/image/upload/v1717658940/our-identity-4.ChFyEPou_m7cr04.png"

    useEffect(() => {
        loadOnePackage()
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

                        <div className="alignTitle mb-4 mt-3">

                            <h1 className="h1-gradient">{packages.title} </h1>
                            <h3 className="text-muted mt-2">{packages.price}$</h3>
                        </div>

                        <h4 className="mb-4">{packages.sortDescription}</h4>
                        <p className="mb-4">{packages.extendedDescription}</p>

                        <Row className="mt-5 mb-5">

                            <Col md={6} className="mt-5 ">
                                <div className="box-info">
                                    <img src={icon3} alt="icon" className="icons" />
                                    <h5 className="sub-title">SURPRISE FACTOR</h5>

                                    <p>
                                        Experience the thrill of surprise travel with TripBliss, exploring
                                        unknown destinations revealed at the last moment.
                                    </p>

                                </div>
                            </Col>


                            <Col md={6} className="mt-5 ">

                                <div className="box-info">
                                    <img src={icon4} alt="icon" className="icons" />
                                    <h5 className="sub-title">EXCELENT SERVICES</h5>

                                    <p>
                                        We pride ourselves on providing our travellers with excellent
                                        customer service. Our team is available to answer any questions
                                    </p>

                                </div>

                            </Col>


                        </Row>

                        <Button
                            variant="gradient"
                            type="button"
                            className="w-100 mt-4"
                            onClick={handlePurchase}
                        >
                            Buy your Experience
                        </Button>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default PackageDetailsPage
