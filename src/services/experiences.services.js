import axios from "axios";

class ExperiencesServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.MONGODB_URI}`
        });
    }

    getAllExperiences() {
        return this.axiosApp.get(`/experience`);
    }
    // Esto para la página de Experiences List

    getOneExperience(experienceId) {
        return this.axiosApp.get(`/${experienceId}`);
    }

    createExperience(experienceData) {
        return this.axiosApp.post(`/experiences`, experienceData);
    }

    editExperience(experienceId, experienceData) {
        return this.axiosApp.put(`/${experienceId}`, experienceData);
    }

    deleteExperience(experienceId) {
        return this.axiosApp.delete(`/${experienceId}`);
    }
}

const experiencesServices = new ExperiencesServices();

export default experiencesServices;