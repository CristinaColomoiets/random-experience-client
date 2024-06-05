import {Accordion} from 'react-bootstrap'
import './FAQ.css'

const FAQ = ()=>{
    return(
        <div className='FAQ'>
            <h1 className="title h1-gradient">Frequently asked questions</h1>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is TripBliss</Accordion.Header>
                    <Accordion.Body>
                    TripBliss is your unforgettable adventure, surprise and excitement. A perfect combination to enjoy your travels through a random experience to date.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>What does a TripBliss experience include?</Accordion.Header>
                    <Accordion.Body>
                    Within our Packages we offer multiple travel options both nationally and globally.  Most of them include: direct roundtrip flights, accommodation nights, and a small digital guide of the city you will be traveling to. You will receive all the detailed information about the trip 2 days before the flight, keeping you intrigued until the last moment.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is a surprise destination?</Accordion.Header>
                    <Accordion.Body>
                    A 'Surprise Destination' includes: direct round-trip flights from the airport of your choice, centrally located hotels, handling of all travel documents so you don't have to worry about anything, and an informative guide.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Is there any extra charge?</Accordion.Header>
                    <Accordion.Body>
                    TripBliss does not apply any extra charges under any circumstances. The amount indicated when you make your reservation covers all the expenses mentioned in your reservation.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>How long is the redemption period?</Accordion.Header>
                    <Accordion.Body>
                    The validity period is 36 months from the date of purchase. If the TripBliss experience is not used within the stated period of validity, it will expire and cannot be redeemed, extended or refunded.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>When booking a surprise trip, does it include roundtrip or one-way flights?</Accordion.Header>
                    <Accordion.Body>
                    When you book your surprise trip with TripBliss, round-trip airfare is included, with non-stop direct flights on some packages. There may be stopovers in some cases with the 'Delux' package.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>What are the hotels that may be available to me?</Accordion.Header>
                    <Accordion.Body>
                    The hotel is a SURPRISE, depending on the package selected. All hotels are centrally located - the room is private, of course!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>Can I take luggage with me?</Accordion.Header>
                    <Accordion.Body>
                    The package includes free carry-on baggage only. Each airline has established its own baggage policy, so make sure your luggage complies with their measurements!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FAQ