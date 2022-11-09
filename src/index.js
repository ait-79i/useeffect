import React from "react";
import ReactDOM from "react-dom/client";
import Fetch from "./_1stConnection/Fetch";
// import Axios from "./_1stConnection/Axios";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Fetch />
		{/* <Axios /> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
