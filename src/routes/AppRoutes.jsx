import { Route, Routes } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
<<<<<<< HEAD
import AddPackagePage from "../pages/AddPackagePage/AddPackagePage";


=======
import AddExperiencePage from "../pages/AddExperiencePage/AddExperiencePage";
import EditExperienceForm from "../components/EditExperienceForm/EditExperienceForm"

>>>>>>> edb258e50489233d6bac0a447d10cf608811f64c
const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
<<<<<<< HEAD
            <Route path="/package/add" element={<AddPackagePage />} />
            <Route path="/package/:packageID" element={<PackageDetailsPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
=======
            <Route path="/package/:packageID" element={<PackageDetailsPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path='/experiences/add' element={<AddExperiencePage />} />
            <Route path='/experiences/:experienceId' element={<EditExperienceForm />} />
>>>>>>> edb258e50489233d6bac0a447d10cf608811f64c

        </Routes>
    )
}
export default AppRoutes