import axios from 'axios'
import { useState,useEffect } from 'react'

const App = () => {
  const [Clients, setClients] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/client")
      .then((res) => setClients(res.data))
  },[])
  return (
    Clients.map(cl => <div>{cl.nomClient}</div>)
  )
}

export default App