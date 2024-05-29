import axios from 'axios'

class PackageServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/packages`
        })
    }


    getOnePackage(param) {
        return this.axiosApp.get(`/${param}`)
    }

    getAllPackages() {
        return this.axiosApp.get(`/`)
    }

    savePackage(packageData) {
        return this.axiosApp.get('/', packageData)
    }

    putPackage(param, packageData) {
        return this.axiosApp.put(`/${param}`, packageData)
    }

    deletePackage(param) {
        return this.axiosApp.delete(`/${param}`)
    }

}

const packageServices = new PackageServices()

export default packageServices