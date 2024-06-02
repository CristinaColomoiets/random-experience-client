import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import imageIconProfile from './../../assets/Avatar-Profile.png'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'
import { toast } from 'sonner'


const Navigation = () => {

  const { loggedUser, logout } = useContext(AuthContext)

  const [expanded, setExpanded] = useState(false)
  return (
    <div className="navigation">

      <Navbar bg="dark" data-bs-theme="dark" expand="" expanded={expanded}>
        <Container>

          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand >Trip Bliss</Navbar.Brand>
          </Link>

          {
            loggedUser ?
              <>
                <Nav className="me-auto">
                  <Navbar.Text onClick={logout}>Logout</Navbar.Text>
                </Nav>

                <Nav className="me-auto">
                  <Link to='/package/add' style={{ textDecoration: 'none' }}>
                    <Navbar.Text >Add Package</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto">
                  <Link to='/experiences/add' style={{ textDecoration: 'none' }}>
                    <Navbar.Text >Add Experience</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto">
                  <Link to='/experiences/all' style={{ textDecoration: 'none' }}>
                    <Navbar.Text >See all experiences</Navbar.Text>
                  </Link>
                </Nav>
              </>

              :
              <>
                <Nav className="me-auto">
                  <Link to='/profile/login' style={{ textDecoration: 'none' }}>
                    <Navbar.Text >Login</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto">
                  <Link to='/profile/signup' style={{ textDecoration: 'none' }}>
                    <Navbar.Text >Sign up</Navbar.Text>
                  </Link>
                </Nav>
              </>
          }

          <Nav className="me-auto">
            {loggedUser && <Navbar.Text>¡Bienvenido, {loggedUser.username}!</Navbar.Text>}
            <Link to={loggedUser && `/profile/${loggedUser._id}`} style={{ textDecoration: 'none' }}>
              <img
                alt=''
                src={loggedUser ? loggedUser.image : imageIconProfile}
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