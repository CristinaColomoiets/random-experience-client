import AddPackageForm from "../../components/AddPackageForm/AddPackageForm"
import { Container } from "react-bootstrap"

const AddPackagePage = () => {
    return (
        <div className="AddPackagePage">
            <Container>
                <h1 className='h1-gradient'>Add New Package</h1>
                <AddPackageForm />
            </Container>

        </div>
    )
}

export default AddPackagePage