import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./components/Context/GloablContext";

ReactDOM.render(
	<GlobalProvider>
		<Router>
			<App />
		</Router>
	</GlobalProvider>,
	document.getElementById("root")
);
