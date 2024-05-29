import EditExperienceForm from '../../components/EditExperienceForm/EditExperienceForm'
import { Container } from "react-bootstrap"

const EditExperiencePage = () => {
    return (
        <div className='EditExperienceForm'>
            <h1>Experiences List</h1>
            <hr />
            <Container>
                <EditExperienceForm />
            </Container>
        </div>
    )
}
export default EditExperiencePage