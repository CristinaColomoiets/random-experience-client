import userServices from "../../services/user.services"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button} from "react-bootstrap"


const UserProfilePage = () => {
    
    const [userData, setUserData] = useState({})
    const {userId} = useParams()
    
    useEffect(()=>{
        loadOneUser()
    }, [])
    
    const loadOneUser = ()=>{
        userServices
            .getOneUser(userId)
            .then(({data}) => {setUserData(data)})
            .catch(err => console.log(err))
    }

    return (
        <div className="ProfilePage">
            <Container>
                <h1>ProfilePage</h1>
                <Row>
                    <Col md={{span: 3}}>
                        <img src={userData.image} alt="profile photo" />
                    </Col>
                    <Col md={{span: 6}}>
                        <h3>Name: {userData.username}</h3>
                        <h4>Your balance: {userData.balance} tokens</h4>
                    </Col>
                </Row>

                <Row>
                    <Col md={{offset: 3, span: 6}}>
                        <Button variant="secondary" size="lg">edit profile</Button>
                        <Button variant="secondary" size="lg">delete profile</Button>
                    </Col>
                </Row>

                <Row>
                    <Col><h3>My experiences:</h3></Col>
                </Row>

                <Row>
                    <Col>Card experience</Col>
                </Row>

                <Row>
                    <Col>Card experience...</Col>
                </Row>
            </Container>
        </div>
    )
}
export default UserProfilePage