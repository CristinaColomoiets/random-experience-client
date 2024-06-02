
const Navigation = () => {

    const { loggedUser, logout } = useContext(AuthContext)

    const [expanded, setExpanded] = useState(false)

    return (

        <div className="Navigation mb-5 pb-2">

            <Navbar expand='' expanded={expanded} className="bg-body-tertiary fixed-top "  >
                <Container>

                    <Link to='/' style={{ textDecoration: 'none' }}>

                        <Navbar.Brand onClick={() => setExpanded(false)}>
                            <img
                                alt=''
                                src='https://cookies-diary.netlify.app/assets/cookie-navbar2-BhnlgYB7.png'
                                height={30}
                                className="d-inline-block align-top"


                            ></img>

                        </Navbar.Brand>
                    </Link>



                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand onClick={() => setExpanded(false)}>TripBliss</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" style={{ border: 'none ' }} />

                    <Navbar.Collapse id="basic-navbar-nav" >

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

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>

    );

}
export default Navigation