import { Container, Row, Col } from "react-bootstrap"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './SignupFormPage.css'

const SignupFormPage = () => {
    return (

        <Container className="mt-5 mb-5">
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Registro</h1>
                    <SignUpForm />
                </Col >
            </Row >
        </Container>

    )
}

export default SignupFormPage