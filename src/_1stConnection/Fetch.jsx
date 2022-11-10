import { useEffect, useState } from 'react'

function Fetch() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users').then((res) => { return res.json() }).then((utilisateurs) => { setUsers(utilisateurs) })
  })
  return (
    <div>Fetch</div>
  )
}

export default Fetch