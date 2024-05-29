import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import AddPackagePage from "../pages/AddPackagePage/AddPackagePage";
import AddExperiencePage from "../pages/AddExperiencePage/AddExperiencePage";
import EditPackagePage from "../pages/EditPackagePage/EditPackagePage";
import EditExperiencePage from '../pages/EditExperiencePage/EditExperiencePage'
import LoginFormPage from '../pages/LoginFormPage/LoginFormPage'
import SignupFormPage from '../pages/SignupFormPage/SignupFormPage'
import ExperienceList from "../components/ExperienceList/ExperienceList";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile/signup" element={<SignupFormPage />} />
            <Route path="/profile/login" element={<LoginFormPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />

            <Route element={<PrivateRoutes />} >

                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/package/:packageId" element={<PackageDetailsPage />} />
                <Route path="/package/add" element={<AddPackagePage />} />
                <Route path='/experiences/add' element={<AddExperiencePage />} />
                <Route path="/package/edit/:packageId" element={<EditPackagePage />} />
                <Route path='/experiences/edit/:experienceId' element={<EditExperiencePage />} />
                <Route path='/experiences/all' element={<ExperienceList />} />

            </Route>


        </Routes>
    )
}
export default AppRoutes