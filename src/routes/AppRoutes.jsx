import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import AddPackagePage from "../pages/AddPackagePage/AddPackagePage";
import EditPackagePage from "../pages/EditPackagePage/EditPackagePage";
import AddExperiencePage from "../pages/AddExperiencePage/AddExperiencePage";
import ExperienceList from "../components/ExperienceList/ExperienceList";
import EditExperiencePage from '../pages/EditExperiencePage/EditExperiencePage'
import LoginFormPage from '../pages/LoginFormPage/LoginFormPage'
import SignupFormPage from '../pages/SignupFormPage/SignupFormPage'
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import StripePage from "../pages/StripePage/StripePage";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile/signup" element={<SignupFormPage />} />
            <Route path="/profile/login" element={<LoginFormPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />


            <Route element={<PrivateRoutes onlyAdmin={true} />} >

                <Route path="/package/add" element={<AddPackagePage />} />
                <Route path='/experiences/all' element={<ExperienceList />} />
                <Route path='/experiences/add' element={<AddExperiencePage />} />
                <Route path='/experiences/edit/:experienceId' element={<EditExperiencePage />} />


            </Route>

            <Route element={<PrivateRoutes onlyAdmin={false} />} >

                <Route path="/profile/:userId" element={<UserProfilePage />} />
                <Route path="/package/:packageId" element={<PackageDetailsPage />} />
                <Route path="/purchase/:purchaseId" element={<PurchasePage />} />
                <Route path="/package/edit/:packageId" element={<EditPackagePage />} />
                <Route path="/stripe" element={<StripePage />} />

            </Route>


        </Routes>
    )
}
export default AppRoutes