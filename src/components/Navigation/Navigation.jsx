import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import imageIconProfile from './../../assets/Avatar-Profile.png'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'
import { toast } from 'sonner'
import Stripe from '../Stripe/Stripe'

const Navigation = () => {
  const { loggedUser, logout } = useContext(AuthContext)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="Navigation mb-5 pb-2">
      <Navbar expand='' expanded={expanded} className="bg-body-tertiary fixed-top">
        <Container>
          <Link to='/'>
            <Navbar.Brand onClick={() => setExpanded(false)}>
              <img
                className='logo'
                alt='TripBliss Logo'
                src='https://res.cloudinary.com/drpdy7tju/image/upload/v1717349090/logo_hddypx.png'
              />
            </Navbar.Brand>
          </Link>
          <Nav className="userNav" onClick={() => setExpanded(false)}>
            <Link to={loggedUser && `/profile/${loggedUser._id}`} className='nav-link' style={{ textDecoration: 'none' }}>
              <img
                alt=''
                src={loggedUser ? loggedUser.image : imageIconProfile}
                height={30}
                className="d-inline-block align-top"
              />
            </Link>
          </Nav>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" style={{ border: 'none ' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            {loggedUser ? (
              <>
                <Nav className="me-auto nav-link">
                  <Link to='/package/add' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>Add Package</Navbar.Text>
                  </Link>
                </Nav>
                <Nav className="me-auto nav-link">
                  <Link to='/experiences/add' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>Add Experience</Navbar.Text>
                  </Link>
                </Nav>
                <Nav className="me-auto nav-link">
                  <Link to='/experiences/all' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>See all experiences</Navbar.Text>
                  </Link>
                </Nav>


                <Nav className="me-auto nav-link">
                  <Link to='/stripe' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>Stripe</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto nav-link" onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }}>
                  <Navbar.Text onClick={logout}>Logout</Navbar.Text>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-auto nav-link">
                  <Link to='/profile/login' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>Login</Navbar.Text>
                  </Link>
                </Nav>
                <Nav className="me-auto nav-link">
                  <Link to='/profile/signup' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>Sign up</Navbar.Text>
                  </Link>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
