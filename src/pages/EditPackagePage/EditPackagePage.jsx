import { Container } from "react-bootstrap"
import EditPackageForm from "../../components/EditPackageForm/EditPackageForm"

const EditPackagePage = () => {
    return (

        <div className="EditPackagePage mt-5 mb-5">

            <Container>
                <h1 className='h1-gradient' >Edit Package</h1>
                <EditPackageForm />
            </Container>

        </div>

    )
}

export default EditPackagePage