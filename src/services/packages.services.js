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

    savePackage(packageData) {
        return this.axiosApp.get('/', packageData)
    }

    putPackage(packageData, param) {
        return this.axiosApp.put(`/${param}`, packageData)
    }
}

const packageServices = new PackageServices()

export default packageServices