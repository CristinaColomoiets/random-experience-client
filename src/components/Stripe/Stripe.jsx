import { useContext, useState } from "react";
import { Col, InputGroup, Row, Form, Button } from "react-bootstrap";
import { BalanceContext } from "./../../contexts/balance.context";

const Stripe = ({ setShowFundsModal }) => {

    const { addFunds } = useContext(BalanceContext);

    const [inputData, setInputData] = useState([]);

    const handleChange = e => {
        setInputData(Number(e.target.value));
    };

    const handleButtonClick = () => {
        addFunds(inputData);
        setShowFundsModal(false);
    };

    return (
        <Row>
            <Col>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="number"
                        name="balance"
                        value={inputData}
                        onChange={handleChange}
                        aria-label="Amount"
                        aria-describedby="basic-addon2"
                    />

                </InputGroup>

            </Col>

            <Button variant="outline-secondary" className="pd-2" onClick={handleButtonClick}>
                Add founds
            </Button>

        </Row>
    );
};

export default Stripe;