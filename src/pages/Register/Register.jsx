import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./register.css";

const Register = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		fname: "",
		lname: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		setUser({
			fname: "",
			lname: "",
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		});
	};
	return (
		<section className="register">
			<div className="register-container">
				<div className="register-content">
					<div className="register-title">
						<span>Sign Up</span>
						<button className="icon" onClick={() => navigate(-1)}>
							<span className="material-icons">close</span>
						</button>
					</div>
					<form className="register-form" onSubmit={handleSubmit}>
						<div className="register-form-group">
							<label>
								<span className="material-icons">person</span>
							</label>
							<input
								type="text"
								name="fname"
								value={user.fname}
								onChange={handleChange}
								placeholder="First Name"
							/>
							<label>
								<span className="material-icons">person</span>
							</label>
							<input
								type="text"
								name="lname"
								value={user.lname}
								onChange={handleChange}
								placeholder="Last Name"
							/>
						</div>
						<div className="register-form-group">
							<label>
								<span className="material-icons">email</span>
							</label>
							<input
								type="email"
								name="email"
								value={user.email}
								onChange={handleChange}
								placeholder="Email"
							/>
							<label>
								<span className="material-icons">
									account_circle
								</span>
							</label>
							<input
								type="text"
								name="username"
								value={user.username}
								onChange={handleChange}
								placeholder="Username"
							/>
						</div>
						<div className="register-form-group">
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
							<label>
								<span className="material-icons">key</span>
							</label>
							<input
								type="password"
								name="confirmPassword"
								value={user.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm Password"
							/>
						</div>
						<div className="register-form-group">
							<Button
								text="Sign Up"
								color="purple"
								variant="outline"
								size="large"
								type="submit"
							/>
						</div>
					</form>
					<div className="register-bottom">
						<span>Already have an account?</span>
						<Link to="/login">Log In</Link>
					</div>
				</div>
				<div className="register-background">
					<div className="register-background-shape register-background-shape__4"></div>
					<div className="register-background-shape register-background-shape__3"></div>
					<div className="register-background-shape register-background-shape__2"></div>
					<div className="register-background-shape register-background-shape__1"></div>
				</div>
			</div>
		</section>
	);
};

export default Register;
