import { Container, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"
import { AuthContext } from "../../contexts/auth.context"
import { useContext, useEffect, useState } from "react"
import { BalanceContext } from "../../contexts/balance.context"

const PackageDetailsPage = () => {

    const { balance, spendFunds } = useContext(BalanceContext);

    const [packages, setPackages] = useState({})

    const { packageId } = useParams()
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)

    // useEffect(() => {
    //     loadOnePurchase()
    // }, [])

    const handlePurchase = () => {

        purchaseServices
            .postPurchase({ package: packageId })
            .then(({ data }) => {
                setPackages(data)
                navigate(`/profile/${loggedUser._id}`)
            })
            .catch(err => console.log(err))
    }

    // const loadOnePurchase = () => {

    //     purchaseServices
    //         .getOnePurchase(packageId)
    //         .then(({ data }) => {
    //             setPackages(data)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (

        <div className="PackageDetailsPage">

            <Container>

                <Button variant="danger" type="button" className="w-100" onClick={handlePurchase} >
                    Buy your Experience
                </Button>

                <p>hola</p>



            </Container>

        </div>

    )

}
export default PackageDetailsPage