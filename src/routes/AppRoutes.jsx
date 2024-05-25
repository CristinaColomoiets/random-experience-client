import { Route, Routes } from "react-router-dom";

import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PackageDetailsPage from "../pages/PackageDetailsPage/PackageDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";


const AppRoutes = ()=>{
    return(
        <Routes>
            
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/package/:packageID" element={<PackageDetailsPage/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            
        </Routes>
    )
}
export default AppRoutes