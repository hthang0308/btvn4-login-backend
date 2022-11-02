import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import "./index.css";

const MainNavigation = () => {
	const user = useMemo(() => {
		const username = localStorage.getItem('username') || null;
		return username;
	}, [])
	return (
		<div className='container'>
			<nav className="navbar">
				<ul className="navbar-nav">
					{user && <>
						<div className="nav-item">
							<Link to="/" className="nav-link">
								Trang chủ
							</Link>
						</div>
						<div className="nav-item">
							<Link to="/meme-page" className="nav-link">
								Meme Page
							</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link" onClick={() => {
								localStorage.removeItem("username");
								window.location.reload();
							}}>Đăng xuất</Link>
						</div>
					</>}
				</ul>
			</nav>
		</div>
	);
};

export default MainNavigation;