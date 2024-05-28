import { Route, Routes } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import AddPackagePage from "../pages/AddPackagePage/AddPackagePage";

import AddExperiencePage from "../pages/AddExperiencePage/AddExperiencePage";
import EditPackagePage from "../pages/EditPackagePage/EditPackagePage";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />

            {/* Package  */}
            <Route path="/package/add" element={<AddPackagePage />} />
            <Route path="/package/:packageId" element={<PackageDetailsPage />} />
            <Route path="/package/edit/:packageId" element={<EditPackagePage />} />

            {/* Experience */}
            <Route path='/experiences/add' element={<AddExperiencePage />} />

        </Routes>
    )
}
export default AppRoutes