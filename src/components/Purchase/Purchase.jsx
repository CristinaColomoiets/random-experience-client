import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import purchaseServices from "../../services/purchase.services"
import Loader from "../Loader/Loader"
import { Card } from "react-bootstrap"

const Purchase = () => {


    const [purchase, setPurchase] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const { purchaseId } = useParams()


    useEffect(() => {
        getThisPurchase()
    }, [])

    const getThisPurchase = () => {

        purchaseServices
            .getOnePurchase(purchaseId)
            .then(({ data }) => {
                setPurchase(data)
                console.log("este es el purchase con ID :  ", purchaseId)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        isLoading ? <Loader /> :

            <div className="purchaseCard">

                <Card >
                    <Card.Body>

                        <Card.Title> Te vas de  Viaje a : {purchase.experience.country}</Card.Title>
                        <Card.Text>En el Hotel: {purchase.experience.hotel}</Card.Text>

                    </Card.Body>
                </Card>

            </div>
    )
}
export default Purchase