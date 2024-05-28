import { Route, Routes } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import AddPackagePage from "../pages/AddPackagePage/AddPackagePage";
import AddExperiencePage from "../pages/AddExperiencePage/AddExperiencePage";
import EditExperiencePage from '../pages/EditExperiencePage/EditExperiencePage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />

            {/* Package */}
            <Route path="/package/add" element={<AddPackagePage />} />
            <Route path="/package/:packageID" element={<PackageDetailsPage />} />

            {/* Experience */}
            <Route path='/experiences/add' element={<AddExperiencePage />} />
            <Route path='/experiences/edit/:experienceId' element={<EditExperiencePage />} />


        </Routes>
    )
}
export default AppRoutes