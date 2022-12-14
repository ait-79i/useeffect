import React from "react";
import ReactDOM from "react-dom/client";
import App from "./charifa/App";
// import Form from "./db/Form";
// import App from "./details/App";
// import Axios from "./_1stConnection/Axios";
// import Fetch from "./_1stConnection/Fetch";
// import AxiosClassComponents from "./_1stConnection/AxiosClassComponents";
// import Exersise1 from "./Exersises/Exersise1";
// import Exersise2 from "./Exersises/Exersise2";
// import CompMaster from "./Routes/hafed/CompMaster";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App/>
		{/* <Form /> */}
		{/* <CompMaster /> */}
		{/* <Axios /> */}
		{/* <Fetch /> */}
		{/* <AxiosClassComponents /> */}
		{/* <Exersise1/> */}
		{/* <Exersise2/> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
