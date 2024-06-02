import axios from 'axios'

class PurchaseServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/purchases`
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    postPurchase(purchaseData) {
        return this.axiosApp.post(`/`, purchaseData)
    }

    getOnePurchase(param) {
        return this.axiosApp.get(`/${param}`)
    }

    getAllPurchasesByUser() {
        return this.axiosApp.get(`/byuser/userId`)
    }



}

const purchaseServices = new PurchaseServices()

export default purchaseServices