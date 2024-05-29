<<<<<<< HEAD
import {Row, Col} from "react-bootstrap"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './SignupFormPage.css'

const SignupFormPage = ()=>{

    return(
        
      <div className="SignupFormPage">

        <h1>Here you can signup</h1>

        <Row>
            <Col md={{offset: 3, span: 6}}>
                <SignUpForm/>
            </Col>
        </Row>

      </div>
  
=======
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

>>>>>>> 49151b5b9cb1fbfd2a6ca835a7d2567175b0150f
    )
}

export default SignupFormPage