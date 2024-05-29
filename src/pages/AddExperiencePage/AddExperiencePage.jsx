import AddExperienceForm from '../../components/AddExperienceForm/AddExperienceForm'
import { Container } from "react-bootstrap"

const AddExperiencePage = () => {

    return (

        <div className="AddExperiencePage">

            <Container>

                <h1>Add a new experiencie</h1>
                <hr />

                <AddExperienceForm />

            </Container>

        </div>

    )
}

export default AddExperiencePage