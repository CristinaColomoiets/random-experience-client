import axios from "axios";
class ExperiencesServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/experiences`
        });
    }
    getAllExperiences() {
        return this.axiosApp.get(`/`);
    }
    getOneExperience(experienceId) {
        return this.axiosApp.get(`/${experienceId}`);
    }
    createExperience(experienceData) {
        return this.axiosApp.post(`/`, experienceData);
    }
    editExperience(experienceId, experienceData) {
        return this.axiosApp.put(`/${experienceId}`, experienceData);
    }
    deleteExperience(experienceId) {
        return this.axiosApp.delete(`/${experienceId}`);
    }
}
const experiencesServices = new ExperiencesServices();
export default experiencesServices