import { Container } from "react-bootstrap"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import './SignupFormPage.css'

const SignupFormPage = ()=>{
    return(
      
        <Container className="container-form">
           <SignUpForm/>
        </Container>
  
    )
}

export default SignupFormPage