import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
	const user = false;

	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-f"></i>
				<i className="topIcon fa-brands fa-twitter"></i>
				<i className="topIcon fa-brands fa-pinterest"></i>
				<i className="topIcon fa-brands fa-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/" className="link">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/about" className="link">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/contact" className="link">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/write" className="link">
							WRITE
						</Link>
					</li>
					<li className="topListItem">{user && "LOGOUT"}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="topImg"
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link to="/login" className="link">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/register" className="link">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
