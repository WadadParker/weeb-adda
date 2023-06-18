import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route,Routes} from "react-router-dom";

import {Home} from "src/pages/home/Home.jsx";

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
					<Route path="/" element={<Home />} />
				</Routes>
			
		</>
	);
}

export default App;
