import ExperienceList from "../../components/ExperienceList/ExperienceList"
import { Container } from "react-bootstrap"

const ExperienceListPage = () => {
    return (
        <div className="ExperienceList">

            <Container>
                <h1 className="h1-gradient">All Experiences</h1>
                <ExperienceList />
            </Container>

        </div>
    )
}

export default ExperienceListPage