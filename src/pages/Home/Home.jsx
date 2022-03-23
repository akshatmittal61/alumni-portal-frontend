import React from "react";
import "./home.css";
import waves from "../../images/wave.svg";
import homeBg from "../../images/home-bg.png";
import Button from "../../components/Button/Button";

const Home = () => {
	return (
		<section
			className="home"
			style={{
				backgroundImage: `url(${homeBg})`,
			}}
		>
			<div
				className="home-cover"
				style={{
					backgroundImage: `url(${waves})`,
				}}
			>
				<Button
					text="Click Here"
					size=""
					color="Blue"
					containsLink
					href="/login"
				/>
			</div>
		</section>
	);
};

export default Home;
