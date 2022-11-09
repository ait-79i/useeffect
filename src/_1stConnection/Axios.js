import React, { useEffect, useState } from "react";
import axios from "axios";
const Axios = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data));
	}, []);
	return (
		<div>
			<h1>Users Number : {users.length}</h1>
		</div>
	);
};

export default Axios;
