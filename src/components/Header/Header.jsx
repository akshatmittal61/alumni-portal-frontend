import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GloablContext";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
	const { openNav, setOpenNav, setIsAuthenticated, user } =
		useContext(GlobalContext);
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const logoutUser = () => {
		setIsAuthenticated(false);
		localStorage.setItem("isAuthenticated", false);
	};
	return (
		<section
			className="header-container"
			style={{
				left: openNav ? "var(--side-width)" : "7.5rem",
				width: openNav
					? "calc(100vw - var(--side-width))"
					: "calc(100vw - 7.5rem)",
			}}
		>
			<header className="header" data-aos="fade-down">
				<div className="header-left">
					<button onClick={() => setOpenNav(!openNav)}>
						<span className="material-icons">menu</span>
					</button>
				</div>
				<div
					className="header-right"
					onClick={() => setOpenUserMenu(true)}
				>
					<div className="header-right-user">
						<img src={user.avatar} alt={user.name} />
					</div>
				</div>
			</header>
			{openUserMenu && (
				<HeaderUserMenu
					logout={logoutUser}
					close={() => setOpenUserMenu(false)}
				/>
			)}
		</section>
	);
};

export default Header;
