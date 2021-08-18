import React, { Component } from "react"
import * as profilesAPI from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
class Users extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const users = await profilesAPI.getAllProfiles()
    this.setState({ users })
  }

  render() {
    const {users} = this.state

    return (
      <>
        <h1>User Profiles</h1>
       {users.map(profile =>
          <ProfileCard
            profile={profile}
            key={profile._id}
            userProfile={this.props.userProfile}
            handleAddFriend={this.props.handleAddFriend}
            handleRemoveFriend={this.props.handleRemoveFriend}
          />
        )}
       
      </>
    )
  }
}

export default Users