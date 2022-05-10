import "./SideBar.css";

export default function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
					id dolores sit deleniti nulla commodi quia delectus ab voluptatum,
					repellendus, quae molestias pariatur. Nisi saepe eaque quis eius, odio
					officia!
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sports</li>
					<li className="sidebarListItem">Movies</li>
					<li className="sidebarListItem">Tech</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook-f"></i>
					<i className="sidebarIcon fa-brands fa-twitter"></i>
					<i className="sidebarIcon fa-brands fa-pinterest"></i>
					<i className="sidebarIcon fa-brands fa-instagram"></i>
				</div>
			</div>
		</div>
	);
}
