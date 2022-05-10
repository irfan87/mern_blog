import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Username</label>
				<input
					type="email"
					placeholder="Enter your username"
					className="registerInput"
				/>
				<label>Email</label>
				<input
					type="email"
					placeholder="Enter your valid email"
					className="registerInput"
				/>
				<label>Password</label>
				<input
					type="password"
					placeholder="Enter your password"
					className="registerInput"
				/>
				<button className="registerButton">Register</button>
			</form>
			<button className="loginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
		</div>
	);
}
