import AddExperienceForm from '../../components/AddExperienceForm/AddExperienceForm'
import { Container } from "react-bootstrap"

const AddExperiencePage = () => {

    return (
        <div className='AddExperienceForm'>

            <Container>
                <h1 className='h1-gradient mt-5 mb-5'>Add Experience</h1>
                <AddExperienceForm />
            </Container>
        </div>
    )
}

export default AddExperiencePage