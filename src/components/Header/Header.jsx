import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GloablContext";
import man from "../../images/man.svg";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
	const { openNav, setOpenNav, setIsAuthenticated } =
		useContext(GlobalContext);
	const [openUserMenu, setOpenUserMenu] = useState(false);
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
						<img src={man} alt="Man" />
					</div>
				</div>
			</header>
			{openUserMenu && (
				<div
					className="header-user-menu"
					onClick={() => setOpenUserMenu(false)}
				>
					<div className="header-user-menu-box" data-aos="fade-down">
						<div className="header-user-menu-box-top">
							<Link to="/profile">
								<div className="header-user-menu-box__icon">
									<span className="material-icons">
										account_circle
									</span>
								</div>
								<div className="header-user-menu-box__text">
									Profile
								</div>
							</Link>
							<Link to="/settings">
								<div className="header-user-menu-box__icon">
									<span className="material-icons">
										settings
									</span>
								</div>
								<div className="header-user-menu-box__text">
									Settings
								</div>
							</Link>
						</div>
						<div className="header-user-menu-box-bottom">
							<Button
								text={
									<>
										<span className="material-icons">
											logout
										</span>
										<span>Logout</span>
									</>
								}
								color="Blue"
								variant="neuro"
								style={{
									display: "flex",
								}}
								onClick={() => setIsAuthenticated(false)}
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Header;
