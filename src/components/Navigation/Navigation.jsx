import React, { useContext } from "react";
import navLinks from "../../navigation.js";
import "./navigation.css";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.svg";
import GlobalContext from "../Context/GloablContext.jsx";

const Navigation = () => {
	const { openNav } = useContext(GlobalContext);
	return (
		<section
			className="navigation-container"
			style={{
				width: openNav ? "var(--side-width)" : "7.5rem",
			}}
		>
			<div className="navigation" data-aos="fade-right">
				<div
					className="navigation-head"
					style={{
						justifyContent: openNav ? "flex-start" : "center",
					}}
				>
					<Link to="/">
						<img src={favicon} alt="Alumni Portal" />
					</Link>
				</div>
				<div className="navigation-body">
					<nav
						className="navigation-nav"
						style={{
							width: openNav ? "90%" : "100%",
						}}
					>
						<ul
							className="navigation-nav-ul"
							style={{
								alignItems: openNav ? "flex-start" : "center",
							}}
						>
							{navLinks.map((navLink, index) => (
								<li className="navigation-nav-li" key={index}>
									<Link to={navLink.route}>
										<span
											className="navigation-nav-li__icon"
											style={{
												borderRadius: openNav
													? "500px"
													: "12px",
												padding: openNav
													? "0.5rem"
													: "0.7rem",
											}}
										>
											<span
												className="material-icons"
												style={{
													fontSize: openNav
														? "1.5rem"
														: "1.75rem",
												}}
											>
												{navLink.icon}
											</span>
										</span>
										{openNav && (
											<span className="navigation-nav-li__text">
												{navLink.title}
											</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
};

export default Navigation;
