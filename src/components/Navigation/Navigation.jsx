import React, { useContext } from "react";
import GlobalContext from "../Context/GloablContext";
import navLinks from "../../navigation.js";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
	const { setOpenNav } = useContext(GlobalContext);
	return (
		<section className="navigation">
			<div className="navigation-pane" data-aos="fade-right">
				<div className="navigation-head">
					<button className="icon" onClick={() => setOpenNav(false)}>
						<span className="material-icons">close</span>
					</button>
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
											<span>{navLink.title}</span>
										</span>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div
				className="navigation-cover"
				onClick={() => setOpenNav(false)}
			></div>
		</section>
	);
};

export default Navigation;
