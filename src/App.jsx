import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navigation from "./components/Navigation/Navigation";
import GlobalContext from "./components/Context/GloablContext";
import Header from "./components/Header/Header";

const App = () => {
	AOS.init();
	const location = useLocation();
	const { openNav, setOpenNav, setIsAuthenticated, breakpoint } =
		useContext(GlobalContext);
	useEffect(() => {
		let isLocalAuthenticated = localStorage.getItem("isAuthenticated");
		if (isLocalAuthenticated)
			setIsAuthenticated(JSON.parse(isLocalAuthenticated));
		else setIsAuthenticated(true);
	}, [breakpoint, setIsAuthenticated]);
	return (
		<>
			{location.pathname !== "/" &&
			location.pathname !== "/login" &&
			location.pathname !== "/register" ? (
				<>
					<Navigation />
					<Header />
					<main
						className="main"
						style={{
							left: breakpoint("mobile")
								? 0
								: openNav
								? "var(--side-width)"
								: "7.5rem",
							width: breakpoint("mobile")
								? "100vw"
								: openNav
								? "calc(100vw - var(--side-width))"
								: "calc(100vw - 7.5rem)",
						}}
					>
						<Routes>
							<Route
								path="/dashboard"
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
						</Routes>
					</main>
				</>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			)}
		</>
	);
};

export default App;
