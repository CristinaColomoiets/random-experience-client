import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"
import Loader from "../Loader/Loader"

const Purchase = () => {

    const { purchaseId } = useParams()

    const [purchase, setPurchase] = useState(null)


    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getThisPurchase()
    }, [])

    const getThisPurchase = () => {
        purchaseServices
            .getOnePurchase(purchaseId)
            .then(({ data }) => {
                setPurchase(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        isLoading ? <Loader />
            :
            <div className="purchase">
                <p>{purchase.package.title}</p>

            </div>
    )
}
export default Purchase