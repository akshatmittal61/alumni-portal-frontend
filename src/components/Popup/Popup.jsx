import React, { useContext, useEffect } from "react";
import GlobalContext from "../Context/GloablContext";
import "./popup.css";

const Popup = ({
	children,
	close,
	title = "",
	width = "60%",
	height = "60%",
	breakpoints = {
		tab: ["70%", "70%"],
		mobile: ["85%", "70%"],
	},
}) => {
	const { breakpoint } = useContext(GlobalContext);
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") close();
		});
		return () => {
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") close();
			});
		};
	}, [close]);

	return (
		<section className="popup">
			<div
				className="popup-box"
				style={
					breakpoint("mobile")
						? {
								width: breakpoints.mobile[0],
								height: breakpoints.mobile[1],
						  }
						: breakpoint("tab")
						? {
								width: breakpoints.tab[0],
								height: breakpoints.tab[1],
						  }
						: {
								width: width,
								height: height,
						  }
				}
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
