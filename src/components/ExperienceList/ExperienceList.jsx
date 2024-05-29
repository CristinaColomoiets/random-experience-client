import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import experiencesServices from '../../services/experiences.services'


const ExperienceList = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        getAllExperiences();
    }, []);

    const getAllExperiences = () => {
        experiencesServices
            .getAllExperiences()
            .then(({ data }) => setExperiences(data))
            .catch(err => console.log(err))
    };

    return (
        <div className='ExperiencesList'>
            <Container>
                <h1>Experiences List</h1>
                <hr />
                {/* TODO DESACOPLAR EN EXPERIENCESLIST */}
                <Row>
                    {experiences.map((experience) => (
                        <Col key={experience._id} md={4} className='mb-4'>
                            <ExperienceCard {...experience} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ExperienceList
