import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GloablContext";
import "./header.css";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
	const { openNav, setOpenNav, setIsAuthenticated, user, breakpoint } =
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
				padding: breakpoint("mobile")
					? "1rem 0.5rem 0 0.5rem"
					: "1rem 1rem 0 0",
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
