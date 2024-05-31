import axios from 'axios'

class UploadServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/upload`
        })
    }

    uploadimage(imageForm) {
        return this.axiosApp.post('/image', imageForm)
    }
}

const uploadServices = new UploadServices()

export default uploadServices