import {useContext} from 'react'
import { Link } from 'react-router-dom'
import imageIconProfile from './../../assets/Avatar-Profile.png'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth.context';


const Navigation = () => {
  const{loggedUser, logout} = useContext(AuthContext)
  return (
    <div className="navigation">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand >Trip Bliss</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to='/package/add' style={{ textDecoration: 'none' }}>
              <Navbar.Text >Add Package</Navbar.Text>
            </Link>
          </Nav>

          <Nav className="me-auto">
            <Link to='/profile/signup' style={{ textDecoration: 'none' }}>
              <Navbar.Text >Sign up</Navbar.Text>
            </Link>
          </Nav>

          {
            loggedUser ?

            <Nav className="me-auto">
                <Navbar.Text  onClick={logout}>Logout</Navbar.Text>
            </Nav>

            :

            <Nav className="me-auto">
              <Link to='/profile/login' style={{ textDecoration: 'none' }}>
                <Navbar.Text >Login</Navbar.Text>
              </Link>
            </Nav>
          }
          <Nav className="me-auto">
            <Link to='/experiences/add' style={{ textDecoration: 'none' }}>
              <Navbar.Brand >Add Experience</Navbar.Brand>
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link to='/experiences/all' style={{ textDecoration: 'none' }}>
              <Navbar.Brand >See all experiences</Navbar.Brand>

            </Link>
          </Nav>

          <Nav className="me-auto">
            {loggedUser && <Navbar.Text>¡Bienvenido, {loggedUser.username}!</Navbar.Text>}
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