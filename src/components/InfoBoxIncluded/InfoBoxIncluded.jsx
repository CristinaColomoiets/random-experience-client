import {Row, Col, Container} from "react-bootstrap"
import './InfoBoxIncluded.css'


const InfoBoxIncluded = ()=>{

    const icon1 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/avion_gnvrdd.png'
    const icon2 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/hotel_ufagcy.png'
    const icon3 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350207/ubi_jnl3t2.png'
    const icon4 = 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717350206/person_ftbfu4.png'


    return(
    <div className="InfoBoxIncluded">
        <h1 className="title h1-gradient" >What is included?</h1>
        <Container>
            <Row>
                <Col>
                    <div className="box-info">
                        <img src={icon1} alt="icon" className="icons"/>
                        <h5 className="sub-title">SURPRISE FLIGHTS</h5>
                        <p>Round trip flights</p>
                    </div>
                </Col>

                <Col>
                    <div className="box-info">
                        <img src={icon2} alt="icon" className="icons"/>
                        <h5 className="sub-title">HOTELS</h5>
                        <p>Central accommodation</p>
                    </div>
                </Col>

                <Col>
                    <div className="box-info">
                        <img src={icon3} alt="icon"className="icons"/>
                        <h5 className="sub-title">Places</h5>
                        <p>Places and excursions prepared to visit</p>
                    </div>
                </Col>

                <Col>
                    <div className="box-info">
                        <img src={icon4} alt="icon"className="icons"/>
                        <h5 className="sub-title">SURPRISE TRIP!</h5>
                        <p>You don't know what you're getting until you buy a random experience. Let yourself go!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  
    )
}
export default InfoBoxIncluded