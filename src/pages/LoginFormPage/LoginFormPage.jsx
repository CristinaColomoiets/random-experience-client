import { Container } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginFormPage.css'

const LoginFormPage = ()=>{
    return(
     
        <Container className="container-form">
            <LoginForm/>
        </Container>
       
    )
}
export default LoginFormPage