import { useEffect, useState } from 'react'
import axios from 'axios'

const Exersise2 = () => {
  const [user, setUser] = useState()
  const [id, setId] = useState(1)
  const [flag, setFlag] = useState(true)
  useEffect(() => {
    const getData = async (nbr) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${nbr}`)
      setUser(response.data)
    }
    getData(id)
  }, [id])

  return (<>
    <div>
      <h1>Details utillisateur</h1>
      <label htmlFor="id"></label>
      <input type="text" name="id" id="id" onChange={(e) => {
        setId(e.target.value !== '' ? e.target.value : 1)
      }} />
      <button onClick={() => setFlag(false)}>submit</button>
    </div>
    {
      flag === true ?
        <div className="child" >
          {/* {console.log(user)} */}
          <h3 style={{ color: "rgb(92,63,3)" }}>
            id : {id}
            nom:
            {user.name}
            {user.username}
          </h3>
          <p>email:{user.email}</p>
          <p>telephone:{user.phone}</p>
          <p>site web:{user.website}</p>
          <p>rue:{user.address.street}</p>
          <p>ville:{user.address.city}</p>
        </div>
        :
        <></>
    }
  </>
  )
}

export default Exersise2