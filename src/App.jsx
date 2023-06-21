import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route,Routes} from "react-router-dom";

import {Home} from "src/pages/home/Home.jsx";
import { Post } from "src/pages/post/Post";
import { Profile } from "src/pages/profile/Profile";
import { LoginPage } from "src/pages/login/LoginPage.jsx";

if (import.meta.env.DEV) {
	window.onerror = (event, source, lineno, colno, err) => {
		const ErrorOverlay = customElements.get("vite-error-overlay");
		if (!ErrorOverlay) {
			return;
		}
		const overlay = new ErrorOverlay(err);
		document.body.appendChild(overlay);
	};
}

function App() {
	return (
		<>
			
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/post/:postID" element={<Post />} />
					<Route path="/profile/:username" element={<Profile />} />
				</Routes>
			
		</>
	);
}

export default App;
