import { Row, Col, Container } from "react-bootstrap"
import './InfoBoxHDW.css'


const InfoBoxHDW = () => {

    const icon1 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/select_vhhqjf.png'
    const icon2 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/calendar_mrnd4b.png'
    const icon3 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/person_ftbfu4.png'

    return (
        <div className="InfoBoxHDW">
            <h1 className="title h1-gradient">How does <span className="ttl-brand">TripBliss</span> work?</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="box-info">
                            <img src={icon1} alt="icon" className="icons" />
                            <h5 className="sub-title">step 1</h5>
                            <p>We offer you to know our promotions within Standard, Premium and Delux Packages that have different experiences.</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="box-info">
                            <img src={icon2} alt="icon" className="icons" />
                            <h5 className="sub-title">step 2</h5>
                            <p>Choose and buy the Package that you liked the most and that seemed to correspond to your tastes and expectations</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="box-info">
                            <img src={icon3} alt="icon" className="icons" />
                            <h5 className="sub-title">step 3</h5>
                            <p>Once you have purchased the Package you can play your lottery and luck! Click to get your unforgettable experienceand enjoy it!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default InfoBoxHDW