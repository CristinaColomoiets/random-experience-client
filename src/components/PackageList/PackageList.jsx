import { useEffect, useState } from "react"
import packageServices from "../../services/packages.services"
import PackageCard from "../PackageCard/PackageCard"

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
            {
                packages.map(eachPackage => (
                    <div key={eachPackage._id}>
                        <PackageCard {...eachPackage} />
                    </div>
                ))
            }
        </>

    );
}
export default PackageList