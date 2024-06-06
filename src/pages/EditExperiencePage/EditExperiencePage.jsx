import EditExperienceForm from '../../components/EditExperienceForm/EditExperienceForm'
import { Container } from "react-bootstrap"

const EditExperiencePage = () => {
    return (
        <div className='EditExperienceForm mb-5 mt-5'>
            <Container>
                <h1 className='h1-gradient'>Edit Experience</h1>
                <EditExperienceForm />
            </Container>
        </div>
    )
}
export default EditExperiencePage