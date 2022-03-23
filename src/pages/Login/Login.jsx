import React, { useState } from "react";
import "./login.css";
import chips from "../../images/chips.svg";
import loginBg from "../../images/login-bg.jpeg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	return (
		<section
			className="login"
			style={{
				backgroundImage: `url(${chips})`,
			}}
		>
			<div className="login-container">
				<div className="login-left">
					<div className="legin-left-top">
						<div className="login-left-title">Welcome!</div>
						<form className="login-left-form">
							<div className="login-left-form-group">
								<label>
									<span className="material-icons">
										person
									</span>
								</label>
								<input
									type="text"
									name="username"
									value={user.username}
									onChange={handleChange}
									placeholder="Username / Email"
								/>
							</div>
							<div className="login-left-form-group">
								<label>
									<span className="material-icons">lock</span>
								</label>
								<input
									type="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									placeholder="Password"
								/>
							</div>
							<div className="login-left-form-group">
								<Link to="/forgot">Forgot Password?</Link>
								<Button
									type="submit"
									text="Login"
									color="brown"
								/>
							</div>
						</form>
					</div>
					<div className="login-left-bottom">
						<span>Don't have an account? </span>
						<Link to="/register">Sign Up</Link>
					</div>
				</div>
				<div
					className="login-right"
					style={{
						backgroundImage: `url(${loginBg})`,
					}}
				>
					<button className="icon" onClick={() => navigate(-1)}>
						<span className="material-icons">close</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;