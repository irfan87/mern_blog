import SideBar from "../../components/SideBar/SideBar";
import "./Settings.css";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsProfilePicture">
						<img
							src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsProfilePictureIcon fa-solid fa-circle-user"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="John Doe" />
					<label>Email</label>
					<input type="email" placeholder="john_doe@awesome.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmitBtn">Update</button>
				</form>
			</div>
			<SideBar />
		</div>
	);
}
