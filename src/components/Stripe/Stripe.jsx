import { useContext, useState } from "react";
import { Col, InputGroup, Row, Form, Button } from "react-bootstrap";
import { BalanceContext } from "./../../contexts/balance.context";

const Stripe = () => {
    const { balance, addFunds } = useContext(BalanceContext);

    const [inputData, setInputData] = useState(null);

    const handleChange = e => {
        setInputData(Number(e.target.value));
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
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => addFunds(inputData)}>
                        Add Tokens
                    </Button>
                </InputGroup>
                <p>Current Balance: {balance}</p>
            </Col>
        </Row>
    );
};

export default Stripe;