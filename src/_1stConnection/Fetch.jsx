import { useEffect, useState } from 'react'

function Fetch() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users').then((res) => { return res.json() }).then((utilisateurs) => { setUsers(utilisateurs) })
  })
  return (
    <div>
      
      <h1>Users Number : {users.length} using fetch function </h1>
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
  )
}

export default Fetch