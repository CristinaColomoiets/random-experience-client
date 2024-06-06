import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Row className="footer-row">
                <Col md={3}>
                    <ul className="footer-list">
                        <Link to="/aboutUs" style={{ textDecoration: 'none' }}><li>ABOUT US</li></Link>
                        <Link to="/FAQ" style={{ textDecoration: 'none' }}><li>FAQ</li></Link>
                    </ul>
                </Col>

                <Col md={6} className="footer-center">
                    <ul className="footer-social-icons">
                        <li className='one'>Cristina Colomoiets:
                            <div className="box-icons">
                                <a href="https://www.linkedin.com/in/cristinacolomoietscom/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/CristinaColomoiets" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </div>
                        </li>
                        <li className='two'>Samuel Pérez:
                            <div className="box-icons">
                                <a href="https://www.linkedin.com/in/samuel-p%C3%A9rez-076553292/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/Samuel-Perez-Morcillo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </div>
                        </li>
                        <li className='three'>Adrian Sobota:
                            <div className="box-icons">
                                <a href="https://www.linkedin.com/in/adrian-sobota/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/Sobdev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </div>
                        </li>
                    </ul>
                </Col>

                <Col md={3} className="footer-rights">
                    <p className='copyrights'>2024 TripBliss © All rights reserved</p>
                    <p className='copyrights'>IronHack, 28039, Madrid, Spain</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;