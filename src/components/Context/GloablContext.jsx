import React, { useState, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated)
	);
	const [isLoading, setIsLoading] = useState(false);
	const [openNav, setOpenNav] = useState(true);
	const [user, setUser] = useState({
		name: "Akshat Mittal",
		status: "Developing",
		email: "akshatmittal2506@gmail.com",
		phone: 9456849466,
		username: "akshatmittal61",
		batch: "2020",
		bio: "MERN Stack developer",
		currentOrganization: "MERN",
		desgination: "MERN Stack Developer",
		dob: "2002-06-25",
		gender: "Male",
		avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
	});
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
				user,
				setUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
