import { useEffect, useState } from "react"
import packageServices from "../../services/packages.services"
import PackageCard from "../PackageCard/PackageCard"
import { Row, Col } from "react-bootstrap"

const API_URL = import.meta.env.VITE_API_URL

const PackageList = () => {

    const [packages, setPackages] = useState([])

    useEffect(() => {
        loadAllPackages()
    }, [])

    const loadAllPackages = () => {

        packageServices
            .getAllPackages()
            .then(({ data }) => setPackages(data))
            .catch(err => console.log(err))
    }


    return (

        <>
            <Row>
                {

                    packages.map(eachPackage => (
                        <Col className="mt-5">
                            <div key={eachPackage._id}>
                                <PackageCard {...eachPackage} />
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </>

    );
}
export default PackageList