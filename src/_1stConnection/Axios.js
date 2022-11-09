import React, { useEffect, useState } from "react";
import axios from "axios";
// const Axios = () => { //! M1
// 	const [users, setUsers] = useState([]);
// 	useEffect(() => {
// 		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
// 			setUsers(res.data);
// 			console.log(res.data);
// 		});
// 	}, []);
// 	return (
// 		<div>
// 			<h1>Users Number : {users.length}</h1>
// 			{users.map((user) => {
// 				return (
// 					<div className="child" key={user.id}>
// 						<h3 style={{ color: "rgb(92,63,3)" }}>
// 							{user.name}
// 							{user.username}
// 						</h3>
// 						<p>email:{user.email}</p>
// 						<p>
// 							ville:{user.address.city} rue:{user.address.street}
// 						</p>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

const Axios = () => {
	//! M2
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const utilisateurs = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			setUsers(utilisateurs.data);
		};
		getData();
	}, []);
	return (
		<div>
			<h1>Users Number : {users.length}</h1>
			{users.map((user) => {
				return (
					<div className="child" key={user.id}>
						<h3 style={{ color: "rgb(92,63,3)" }}>
							{user.name}
							{user.username}
						</h3>
						<p>email:{user.email}</p>
						<p>
							ville:{user.address.city} rue:{user.address.street}
						</p>
					</div>
				);
			})}
		</div>
	);
};
export default Axios;
