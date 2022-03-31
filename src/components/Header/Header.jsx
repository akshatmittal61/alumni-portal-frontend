import React, { useContext } from "react";
import GlobalContext from "../Context/GloablContext";
import "./header.css";

const Header = () => {
	const { openNav, setOpenNav } = useContext(GlobalContext);
	return (
		<section className="header-container">
			<header className="header">
				<div className="header-left">
					<button onClick={() => setOpenNav(!openNav)}>
						<span className="material-icons">menu</span>
					</button>
				</div>
				<div className="header-right">
					<div className="header-right-user">
						<img src="https://avatars.githubusercontent.com/u/84612609?v=4" alt="Akshat Mittal" />
					</div>
				</div>
			</header>
		</section>
	);
};

export default Header;
