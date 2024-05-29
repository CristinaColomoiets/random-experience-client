import { Container, Button } from "react-bootstrap"

const PackageDetailsPage = () => {

    return (

        <div className="PackageDetailsPage">

            <Container>

                <h1>Detalles del paquete</h1>
                <Button variant="danger" type="button" className="w-100" >
                    Compra aqui
                </Button>

            </Container>

        </div>

    )
}

export default PackageDetailsPage