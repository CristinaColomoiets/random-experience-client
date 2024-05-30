import axios from 'axios'

class UserServices{
    constructor(){
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/users`
        })
    }

    getOneUser(id_param){
        return this.axiosApp.get(`/${id_param}`)
    }

    editUser(id_param, userData_param){
        return this.axiosApp.put(`/${id_param}`, userData_param)
    }

    deleteUser(id_param){
        return this.axiosApp.delete(`/${id_param}`)
    }
}

const userServices =  new UserServices()

export default userServices