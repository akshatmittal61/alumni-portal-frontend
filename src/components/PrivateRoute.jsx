import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "./Context/GloablContext";

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, isLoading } = useContext(GlobalContext);
	if (isAuthenticated && !isLoading) return children;
	return <Navigate to="/login" />;
};

export default PrivateRoute;
