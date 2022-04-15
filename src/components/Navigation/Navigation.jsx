import React, { useContext } from "react";
import navLinks from "../../navigation.js";
import "./navigation.css";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.svg";
import GlobalContext from "../Context/GloablContext.jsx";

const Navigation = () => {
	const { openNav, breakpoint } = useContext(GlobalContext);
	return (
		<section
			className="navigation-container"
			style={{
				width: breakpoint("mobile")
					? "var(--side-width)"
					: openNav
					? "var(--side-width)"
					: "7.5rem",
				top: breakpoint("mobile") ? "var(--head-height)" : 0,
				transform: breakpoint("mobile")?(
					openNav?"none":'translateX(-100%)'
				):"none"
			}}
		>
			<div className="navigation" data-aos="fade-right">
				<div
					className="navigation-head"
					style={{
						justifyContent: breakpoint("mobile")
							? "flex-start"
							: openNav
							? "flex-start"
							: "center",
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
							width: breakpoint("mobile")
								? "90%"
								: openNav
								? "90%"
								: "100%",
						}}
					>
						<ul
							className="navigation-nav-ul"
							style={{
								alignItems: breakpoint("mobile")
									? "flex-start"
									: openNav
									? "flex-start"
									: "center",
							}}
						>
							{navLinks.map((navLink, index) => (
								<li className="navigation-nav-li" key={index}>
									<Link to={navLink.route}>
										<span
											className="navigation-nav-li__icon"
											style={{
												borderRadius: breakpoint(
													"mobile"
												)
													? "500px"
													: openNav
													? "500px"
													: "12px",
												padding: breakpoint("mobile")
													? "0.5rem"
													: openNav
													? "0.5rem"
													: "0.7rem",
											}}
										>
											<span
												className="material-icons"
												style={{
													fontSize: breakpoint(
														"mobile"
													)
														? "1.5rem"
														: openNav
														? "1.5rem"
														: "1.75rem",
												}}
											>
												{navLink.icon}
											</span>
										</span>
										<span
											className="navigation-nav-li__text"
											style={
												breakpoint("mobile")
													? {
															opacity: 1,
															width: "fit-content",
															visibility:
																"visible",
															padding:
																"0.25rem 1rem",
															margin: "0 0.25rem",
													  }
													: {
															opacity: openNav
																? "1"
																: "0",
															width: openNav
																? "fit-content"
																: "0",
															visibility: openNav
																? "visible"
																: "hidden",
															padding: openNav
																? "0.25rem 1rem"
																: "0",
															margin: openNav
																? "0 0.25rem"
																: "0",
													  }
											}
										>
											{navLink.title}
										</span>
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
