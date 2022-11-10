import { Component } from 'react'
// import axios from 'axios'

export default class AxiosClassComponents extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  // componentDidMount() {//! AXIOS librory
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => { this.setState({ users: res.data }) })
  // }

  componentDidMount() {//! FETCH FUNCTION
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => { console.log(response); return response.json() })
      .then((users) => { this.setState({ utilisateurs: users }) })
  }
  render() {
    return (
      <div>
        <h3>liste utilisateurs</h3>
        <div>
          <h1>nombre d'utilisateurs:
            {this.state.users.length}</h1>
          {this.state.users.map(user => {
            return (
              <div className='child' key={user.id}>
                <h3 style={{ color: "rgb(92, 62, 3)" }}>nom:
                  {user.name} {user.username}</h3>
                <p>email:{user.email}</p>
                <p> ville:{user.address.city}
                  rue:{user.address.street} </p>
              </div>
            )
          })}</div>
      </div>
    )
  }
}

