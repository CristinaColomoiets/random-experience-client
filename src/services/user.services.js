import axios from 'axios'

class UserServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/users`
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }


            return config
        })
    }

    getLoggedUser() {
        return this.axiosApp.get(`/user`)
    }

    editUser(id_param, userData_param) {
        return this.axiosApp.put(`/${id_param}`, userData_param)
    }

    deleteUser(id_param) {
        return this.axiosApp.delete(`/${id_param}`)
    }

    getBalance() {
        return this.axiosApp.get('/balance')
    }

    addBalance(balanceData) {
        return this.axiosApp.post('/balance/add', balanceData)

    }

    editBalance(amountData) {
        return this.axiosApp.put('/balance/spend', amountData)
    }

}

const userServices = new UserServices()

export default userServices







