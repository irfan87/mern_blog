import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input
					type="email"
					placeholder="Enter your email"
					className="loginInput"
				/>
				<label>Password</label>
				<input
					type="password"
					placeholder="Enter your password"
					className="loginInput"
				/>
				<button className="loginBtn">Login</button>
			</form>
			<button className="registerBtn">
				<Link className="link" to="/register">
					Register
				</Link>
			</button>
		</div>
	);
}
