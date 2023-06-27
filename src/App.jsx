import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route,Routes} from "react-router-dom";

import {Home} from "src/pages/home/Home.jsx";
import { Profile } from "src/pages/profile/Profile";
import { LoginPage } from "src/pages/login/LoginPage.jsx";
import { Signup } from "src/pages/signup/Signup";
import Mockman from "mockman-js";
import { CreatePostModal } from "src/components/createPost/CreatePostModal";
import { PostContext } from "src/context/PostContext";
import { Bookmark } from "src/pages/bookmark/Bookmark";
import { Explore } from "src/pages/explore/Explore";

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
	const {state:{showPostModal}}=useContext(PostContext);
	return (
		<>
				{showPostModal && <CreatePostModal />}
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile/:username" element={<Profile />} />
					<Route path="/mock-api" element={<Mockman colorScheme="dark"/>} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/bookmark" element={<Bookmark />} />
				</Routes>
			
		</>
	);
}

export default App;
