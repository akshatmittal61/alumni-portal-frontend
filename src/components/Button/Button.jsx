import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./button.css";

const Button = ({
	text = "Click Me",
	color = "blue",
	size = "normal",
	containsLink = false,
	link = "#",
	containsHref = false,
	href = "#",
	className,
	style,
	variant,
	...rest
}) => {
	let classes = "btn";
	classes += ` btn-${_.kebabCase(color)}`;
	if (size === "small") classes += " btn-sm";
	else if (size === "large") classes += " btn-lg";
	if (variant === "fill" || variant === "outline")
		classes += ` btn-${variant}`;
	return (
		<>
			{containsLink ? (
				<Link to={link}>
					<button
						style={{
							...style,
						}}
						className={`${classes} ${className}`}
						{...rest}
					>
						{text}
					</button>
				</Link>
			) : containsHref ? (
				<a href={href}>
					<button
						style={{
							...style,
						}}
						className={`${classes} ${className}`}
						{...rest}
					>
						{text}
					</button>
				</a>
			) : (
				<button
					style={{
						...style,
					}}
					className={`${classes} ${className}`}
					{...rest}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
