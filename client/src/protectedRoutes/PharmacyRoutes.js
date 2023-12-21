import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';

function PharmacyRoutes() {
    const {userType} = useAuth();
    return userType === "pharmacy" ? <Outlet /> : <LoginPage />
}

export default PharmacyRoutes;