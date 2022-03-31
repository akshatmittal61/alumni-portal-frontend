import React from "react";
import navLinks from "../../navigation.js";
import "./navigation.css";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.svg";

const Navigation = () => {
	return (
		<section className="navigation-container">
			<div className="navigation">
				<div className="navigation-head">
					<Link to="/">
						<img src={favicon} alt="Alumni Portal" />
					</Link>
				</div>
				<div className="navigation-body">
					<nav className="navigation-nav">
						<ul className="navigation-nav-ul">
							{navLinks.map((navLink, index) => (
								<li className="navigation-nav-li" key={index}>
									<Link to={navLink.route}>
										<span className="navigation-nav-li__icon">
											<span className="material-icons">
												{navLink.icon}
											</span>
										</span>
										<span className="navigation-nav-li__text">
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
