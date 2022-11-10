import { useEffect, useState } from 'react'
import axios from 'axios'

const Exersise1 = () => {
  const [user3, setUser3] = useState()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/3').then((res) => {
      console.log(res.data);
      setUser3(res.data)
    })
  }, [])
  return (

    <div>Open the console</div>
  )
}

export default Exersise1