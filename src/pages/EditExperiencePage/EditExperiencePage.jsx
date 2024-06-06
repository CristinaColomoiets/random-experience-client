import EditExperienceForm from '../../components/EditExperienceForm/EditExperienceForm'
import { Container } from "react-bootstrap"

const EditExperiencePage = () => {
    return (
        <div className='EditExperienceForm'>
            <h1 className='h1-gradient'>Edit Experience</h1>
            <Container>
                <EditExperienceForm />
            </Container>
        </div>
    )
}
export default EditExperiencePage