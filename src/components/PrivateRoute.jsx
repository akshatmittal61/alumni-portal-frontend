import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "./Context/GloablContext";

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, isLoading } = useContext(GlobalContext);
	if (!isLoading) {
		console.log(!isLoading);
		console.log(isAuthenticated);
		if (isAuthenticated) return children;
		else return <Navigate to="/login" />;
	}
};

export default PrivateRoute;
