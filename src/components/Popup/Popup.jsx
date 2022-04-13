import React, { useEffect } from "react";
import "./popup.css";

const Popup = ({ children, close, title = "", width, height }) => {
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") close();
		});
		return () => {
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") {
					console.log("escape");
					close();
				}
			});
		};
	}, [close]);

	return (
		<section className="popup">
			<div
				className="popup-box"
				style={{
					width: width,
					height: height,
				}}
				data-aos="zoom-in"
			>
				<div className="popup-head">
					{title !== "" && (
						<span className="popup-head-title">{title}</span>
					)}
					<button className="icon" onClick={close}>
						<span className="material-icons">close</span>
					</button>
				</div>
				<div className="popup-body">{children}</div>
			</div>
		</section>
	);
};

export default Popup;
