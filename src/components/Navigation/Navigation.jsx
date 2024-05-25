import { Link } from 'react-router-dom'
import imageIconProfile from  './../../assets/Avatar-Profile.png'
import { Container, Navbar,Nav } from 'react-bootstrap';


const Navigation = () =>{
    return (
        <div className="navigation">
        
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                    <Link to='/profile' style={{ textDecoration: 'none' }}>
                        <img
                            alt=''
                            src={imageIconProfile}
                            height={30}
                            className="d-inline-block align-top"
                        ></img>
                    </Link>
              </Nav>
            </Container>
          </Navbar>
          </div>

      );

}
export default Navigation