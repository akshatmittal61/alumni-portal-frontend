import React, { useContext } from "react";
import GlobalContext from "../Context/GloablContext";
import man from "../../images/man.svg";
import "./header.css";

const Header = () => {
	const { openNav, setOpenNav } = useContext(GlobalContext);
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
				<div className="header-right">
					<div className="header-right-user">
						<img src={man} alt="Man" />
					</div>
				</div>
			</header>
		</section>
	);
};

export default Header;
