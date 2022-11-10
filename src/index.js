import React from "react";
import ReactDOM from "react-dom/client";
// import Axios from "./_1stConnection/Axios";
import Fetch from "./_1stConnection/Fetch";
import reportWebVitals from "./reportWebVitals";
import AxiosClassComponents from "./_1stConnection/AxiosClassComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AxiosClassComponents/>
		{/* <Axios /> */}
		{/* <Fetch /> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
