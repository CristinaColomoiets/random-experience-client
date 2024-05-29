import {Row, Col} from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import './LoginFormPage.css'

const LoginFormPage = ()=>{

    return(
        
        <div className="LoginFormPage">

            <h1>Here you can log in</h1>
            
            <Row>
                <Col md={{offset: 3, span: 6}}>
                    <LoginForm/>
                </Col>
            </Row>
           
        </div>
       
    )
}
export default LoginFormPage