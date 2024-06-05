import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <Row className="footer-row">
                <Col md={3}>
                    <ul className="footer-list">
                        <li>ABOUT US</li>
                        <li>FAQ</li>
                    </ul>
                </Col>
                <Col md={6} className="footer-center">
                    <ul className="footer-social-icons">
                        <li>
                            Cristina Colomoiets: <a href="https://www.linkedin.com/in/cristinacolomoietscom/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a><a href="https://github.com/CristinaColomoiets" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </li>
                        <li>
                            Samuel Pérez: <a href="https://www.linkedin.com/in/samuel-p%C3%A9rez-076553292/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/Samuel-Perez-Morcillo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </li>
                        <li>
                            Adrian Sobota: <a href="https://www.linkedin.com/in/adrian-sobota/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/Sobdev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </li>
                    </ul>
                </Col>
                <Col md={3} className="footer-rights">
                    <p>2024 TripBliss © All rights reserved</p>
                    <p>IronHack, 28039, Madrid, Spain</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
