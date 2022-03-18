import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    )
}
