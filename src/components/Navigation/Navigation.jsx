import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import imageIconProfile from './../../assets/Avatar-Profile.png'
import { Container, Navbar, Nav, Image, Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'
import { toast } from 'sonner'
import Stripe from '../Stripe/Stripe'
import LoginForm from '../LoginForm/LoginForm'

const Navigation = () => {

  const { loggedUser, logout } = useContext(AuthContext)
  const [expanded, setExpanded] = useState(false)

  const [showFundsModal, setShowFundsModal] = useState(false)
  const handleClose = () => setShowFundsModal(false)
  const handleShow = () => setShowFundsModal(true)


  const [showLoginModal, setShowLoginModal] = useState(false) 
  const handleCloseLogin = () => setShowLoginModal(false)
  const handleShowLogin = () => setShowLoginModal(true)

  const handleBtnClickLogin = () => {
    setExpanded(false)
    handleShowLogin()
  }




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
            <Link to={loggedUser ? `/profile/${loggedUser._id}` : '/profile/login'} className='nav-link' style={{ textDecoration: 'none' }}>
              <Image
                alt=''
                src={loggedUser ? loggedUser.image : imageIconProfile}
                height={30}
                className="d-inline-block align-top"
                roundedCircle
              />
            </Link>
          </Nav>


          { 
            loggedUser && (
            <>
              <Button variant="primary" onClick={handleShow}>💲</Button>

              <Modal show={showFundsModal} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Money</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Hi, {loggedUser.username}</p>
                  <p>How much money do you need to include in your account?</p>
                  <Stripe setShowFundsModal={setShowFundsModal} />
                </Modal.Body>
              </Modal>
            </>
            )
          }
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" style={{ border: 'none ' }} />

          <Navbar.Collapse id="basic-navbar-nav">
            {
              !loggedUser && (
                <>
                  <Nav className="me-auto nav-link">
                    <Link to='/profile/signup' className='nav-link' style={{ textDecoration: 'none' }}>
                      <Navbar.Text onClick={() => setExpanded(false)}>Sign up</Navbar.Text>
                    </Link>
                  </Nav>

                  <Nav className="me-auto nav-link">
                      <Navbar.Text onClick={handleBtnClickLogin} style={{cursor:"pointer"}}>Login</Navbar.Text>
                  </Nav>

                  <Modal show={showLoginModal} onHide={handleCloseLogin} animation={true}> 
                    <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <LoginForm setShowLoginModal={setShowLoginModal} />
                    </Modal.Body>
                  </Modal>
                </>
              )
            }

            {
             loggedUser?.role === 'ADMIN' &&
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

                <Nav className="me-auto nav-link" onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }}>
                  <Navbar.Text onClick={logout}>Logout</Navbar.Text>
                </Nav>
              </>
            }

            {
              loggedUser?.role === 'USER' &&
              <>
                <Nav className="me-auto nav-link">
                  <Link to='/' className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text onClick={() => setExpanded(false)}>All Packages</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto nav-link" onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }}>
                  <Navbar.Text onClick={logout}>Logout</Navbar.Text>
                </Nav>
              </>
            }

          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
