import { Container } from "react-bootstrap"
import EditUserProfileForm from "../../components/EditUserProfileForm/EditUserProfileForm"



const EditUserProfilePage = () => {
    return (
        <div className="EditUserProfilePage">

            <Container>
                <h1>Edit User Profile Page</h1>
                <EditUserProfileForm/>
            </Container>

        </div>
    )
}

export default EditUserProfilePage