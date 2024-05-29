import { Container } from "react-bootstrap"
import EditPackageForm from "../../components/EditPackageForm/EditPackageForm"

const EditPackagePage = () => {
    return (
        <div className="EditPackagePage">

            <Container>
                <h1>Edit Package</h1>
                <EditPackageForm />
            </Container>

        </div>
    )
}

export default EditPackagePage