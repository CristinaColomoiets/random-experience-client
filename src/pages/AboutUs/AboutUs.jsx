import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

const teamMembers = [
    {
        name: "Cristina Colomoiets",
        role: "Git merge Queen",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1653902628078_qqcjnx.jpg",
        description: "Cristina is a skilled frontend developer with a passion for creating stunning UI/UX designs."
    },
    {
        name: "Samuel Pérez Morcillo",
        role: "MonoDB",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609633/1716231063988_jqcd31.jpg",
        description: "Samuel is our backend wizard, ensuring our server-side logic runs smoothly and efficiently."
    },
    {
        name: "Adrian Sobota Matuszak",
        role: "React Monster Bootstrap",
        image: "https://res.cloudinary.com/drpdy7tju/image/upload/v1717609947/Sin_ti%CC%81tulo_500_x_500_px_300_x_300_px_webpid.png",
        description: "Adrian is a versatile full stack developer, bridging the gap between front and backend."
    }
];

const AboutUs = () => {
    return (
        <Container className="about-us-container">
            <Row className="justify-content-center">
                <h1 className='h1-gradient mb-5'>Hey its us! 👋</h1>
                {teamMembers.map((member, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="team-member-card text-center">
                            <Card.Img variant="top" src={member.image} className="team-member-image mx-auto" />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="project-description mt-4">
                <p>This project was a collaborative effort to create a modern web application using technologies such as React, Bootstrap, Node.js, Express and MongoDB. Our goal was to build a seamless and user-friendly experience for our users using all our knowledge adquired during our bootcamp in IronHack Madrid.</p>
            </div>
        </Container>
    );
};

export default AboutUs
