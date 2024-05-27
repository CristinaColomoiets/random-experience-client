import { Link } from 'react-router-dom'
import imageIconProfile from './../../assets/Avatar-Profile.png'
import { Container, Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
  return (
    <div className="navigation">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand >Navbar</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to='/package/add' style={{ textDecoration: 'none' }}>
              <Navbar.Brand >Add Package</Navbar.Brand>

            </Link>
          </Nav>


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