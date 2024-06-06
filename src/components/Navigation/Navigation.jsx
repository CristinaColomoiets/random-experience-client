import { useContext, useState } from 'react'
import { Container, Navbar, Nav, Image, Modal } from 'react-bootstrap'
import { FaDollarSign, FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'
import Stripe from '../Stripe/Stripe'
import LoginForm from '../LoginForm/LoginForm'
import { HashLink as Link } from 'react-router-hash-link'

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
  };

  const handleBtnClickLogout = () => {
    handleCloseLogin()
    logout()
  };

  return (
    <div className="Navigation mb-5 pb-2">
      <Navbar expand="" expanded={expanded} className="bg-body-tertiary fixed-top shadow-navbar">
        <Container>
          <div className="navbar-left">
            <Link to="/">
              <Navbar.Brand onClick={() => setExpanded(false)}>
                <img
                  className="logo"
                  alt="TripBliss Logo"
                  src="https://res.cloudinary.com/drpdy7tju/image/upload/v1717349090/logo_hddypx.png"
                />
              </Navbar.Brand>
            </Link>
          </div>

          <div className="navbar-right">
            {loggedUser && (
              <>
                <button className="icon-button" onClick={handleShow}>
                  <FaDollarSign />
                </button>

                <Modal show={showFundsModal} onHide={handleClose} animation={true}>
                  <Modal.Header closeButton>
                    <Modal.Title>Stripe</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Hi, {loggedUser.username}</p>
                    <Stripe setShowFundsModal={setShowFundsModal} />
                  </Modal.Body>
                </Modal>
              </>
            )}

            <Nav className="userNav" onClick={() => setExpanded(false)}>
              <Link to={loggedUser ? `/profile/${loggedUser?._id}` : '/'}>
                {loggedUser ? (
                  <Image
                    alt=""
                    src={loggedUser.image}
                    size={5}
                    className="d-inline-block align-top"
                    roundedCircle
                    onClick={(e) => !loggedUser && handleShowLogin()}
                  />
                ) : (
                  <FaUserCircle
                    size={30}
                    className="d-inline-block align-top"
                    onClick={handleShowLogin}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </Link>
            </Nav>

            <Navbar.Toggle
              onClick={() => setExpanded(!expanded)}
              aria-controls="basic-navbar-nav"
              style={{ border: 'none ' }}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            {!loggedUser && (
              <>
                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link to="/profile/signup" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Navbar.Text>Sign up</Navbar.Text>
                  </Link>
                </Nav>

                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Navbar.Text onClick={handleBtnClickLogin} style={{ cursor: 'pointer' }}>
                    Login
                  </Navbar.Text>
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
            )}

            {loggedUser?.role === 'ADMIN' && (
              <>
                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link to="/package/add" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Navbar.Text>Add Package</Navbar.Text>
                  </Link>
                </Nav>

                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link to="/experiences/add" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Navbar.Text>Add Experience</Navbar.Text>
                  </Link>
                </Nav>

                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link smooth to="#all-packages" className='nav-link' style={{ textDecoration: 'none' }}>
                    <Navbar.Text>All Packages</Navbar.Text>
                  </Link>
                </Nav>

                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link to="/experiences/all" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Navbar.Text>All experiences</Navbar.Text>
                  </Link>
                </Nav>


                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link" style={{ cursor: 'pointer' }}>
                  <Navbar.Text onClick={handleBtnClickLogout}>Logout</Navbar.Text>
                </Nav>
              </>
            )}

            {loggedUser?.role === 'USER' && (
              <>
                <Nav onClick={() => setExpanded(false)} className="me-auto nav-link">
                  <Link smooth to="#all-packages" className="nav-link" style={{ textDecoration: 'none' }}>
                    <Navbar.Text>All Packages</Navbar.Text>
                  </Link>
                </Nav>

                <Nav className="me-auto nav-link" onClick={() => setExpanded(false)} style={{ cursor: 'pointer' }}>
                  <Navbar.Text onClick={handleBtnClickLogout}>Logout</Navbar.Text>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation
