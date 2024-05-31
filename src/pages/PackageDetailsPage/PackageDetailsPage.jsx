import { Container, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"

const PackageDetailsPage = () => {

    const { packageId } = useParams()
    const navigate = useNavigate()
    const { purchaseId } = useParams()

    const handlePurchase = () => {

        purchaseServices
            .postPurchase({ package: packageId })
            .then(({ data }) => {
                navigate(`/purchase/${data._id}`)
                console.log('este va a ser tu viaje', data)
                console.log(data._id)

            })
            .catch(err => console.log(err))
    }

    return (

        <div className="PackageDetailsPage">

            <Container>
                <Button variant="danger" type="button" className="w-100" onClick={handlePurchase} >
                    Buy your Experience
                </Button>

            </Container>

        </div>

    )

}
export default PackageDetailsPage