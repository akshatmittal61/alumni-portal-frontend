import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login/Login";

const App = () => {
	AOS.init();
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
