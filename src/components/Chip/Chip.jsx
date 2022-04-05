import React from "react";
import "./chip.css";

const Chip = ({
	text = "Chip Text",
	size = "normal",
	color = "green",
	variant = "outline",
	style,
	...rest
}) => {
	return (
		<button
			className={`chip 
			${size === "large" && "chip-lg"} 
			${size === "small" && "chip-sm"}`}
			style={{
				borderColor: `var(--${color})`,
				outlineColor: `var(--${color})`,
				transition: "all 0.25s ease-in-out",
				backgroundColor:
					variant === "fill" ? `var(--${color})` : "transparent",
				...style,
			}}
			{...rest}
		>
			{text}
		</button>
	);
};

export default Chip;
