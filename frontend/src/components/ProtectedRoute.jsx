import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // While checking auth status, you can show a loading screen
    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    // If not logged in, redirect to login page
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If logged in, render children
    return children;
};

export default ProtectedRoute;