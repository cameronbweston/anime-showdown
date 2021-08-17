import React, { Component } from "react"
import { getAllUsers } from "../../services/userService"
import ProfileCard from '../../components/ProfileCard/ProfileCard'
class Users extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const users = await getAllUsers()
    this.setState({ users })
  }






  render() {
    return (
      <>
        <h1>This is a list of all the users.</h1>
       {this.state.users.map(user =>
        <ProfileCard/>
        )}
       
      </>
    )
  }
}

export default Users