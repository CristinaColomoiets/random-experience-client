import { Row, Col } from "react-bootstrap"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './SignupFormPage.css'

const SignupFormPage = () => {

    return (

        <div className="SignupFormPage">

            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <SignUpForm />
                </Col>
            </Row>

        </div>

    )
}

export default SignupFormPage