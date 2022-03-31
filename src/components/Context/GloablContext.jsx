import React, { useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [openNav, setOpenNav] = useState(true);
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
	});
	return (
		<GlobalContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				isLoading,
				setIsLoading,
				openNav,
				setOpenNav,
				axiosInstance,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
