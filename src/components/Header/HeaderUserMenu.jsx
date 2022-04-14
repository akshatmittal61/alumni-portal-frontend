import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const HeaderUserMenu = ({logout,close}) => {
	return (
		<div
			className="header-user-menu"
			onClick={() => close()}
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
							<span className="material-icons">settings</span>
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
								<span className="material-icons">logout</span>
								<span>Logout</span>
							</>
						}
						color="Blue"
						variant="neuro"
						style={{
							display: "flex",
						}}
						onClick={() => logout()}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderUserMenu;
