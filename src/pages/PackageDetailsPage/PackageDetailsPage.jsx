import { Container, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"
const PackageDetailsPage = () => {

    const { packageId } = useParams()
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)

    const handlePurchase = () => {

        purchaseServices
            .postPurchase({ package: packageId })
            .then(({ data }) => {
                navigate(`/profile/${loggedUser._id}`)
            })
            .catch(err => console.log(err))
    }

    const handleBuy = () => {

    }

    return (

        <div className="PackageDetailsPage">

            <Container>
                <Button variant="danger" type="button" className="w-100" onClick={handlePurchase} >
                    Buy your Experience
                </Button>

                <Button variant='primary' type='button' className='w-100' onClick={handleBuy}>Botón de resta</Button>

            </Container>

        </div>

    )

}
export default PackageDetailsPage