import { useContext, useEffect, useState } from "react"
import packageServices from "../../services/packages.services"
import PackageCard from "../PackageCard/PackageCard"
import { Row, Col } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"

const API_URL = import.meta.env.VITE_API_URL

const PackageList = () => {

    const { loggedUser } = useContext(AuthContext)

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
            {
                loggedUser ?

                    <Row>
                        {

                            packages.map(eachPackage => (
                                <Col key={eachPackage._id} className="mt-5">
                                    <div className="muted-text">
                                        <PackageCard {...eachPackage} />
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    :
                    <Row>
                        {

                            packages.map(eachPackage => (
                                <Col key={eachPackage._id} className="mt-5 text-muted">
                                    <div >
                                        <PackageCard {...eachPackage} />
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>

            }

        </>

    );
}
export default PackageList