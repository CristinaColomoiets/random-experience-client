import React from 'react';
import { useEffect, useState } from 'react';
import experiencesServices from '../../../services/experiences.services'

const ExperienceList = () => {
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        getAllExperiences()
    }, [])

    const getAllExperiences = () => {
        experiencesServices
            .getAllExperiences()
            .then(({ data }) => setExperiences(data))
            .catch(err => console.log(err)) //Cambiar error
    }
    return (

        <div className='ExperiencesList'>
            <Container>
                <h1>Test experiences list</h1>
                <hr />
                <ExperiencesList experienes={experiences} />
            </Container>
        </div>
    )
}

export default ExperienceList