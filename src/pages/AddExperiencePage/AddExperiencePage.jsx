import AddExperienceForm from '../../components/AddExperienceForm/AddExperienceForm'
import { Container } from "react-bootstrap"

const AddExperiencePage = () => {
    return (
        <div className='AddExperienceForm'>
            <h1>Add a new experience</h1>
            <hr />
            <Container>
                <AddExperienceForm />
            </Container>
        </div>
    )
}
export default AddExperiencePage