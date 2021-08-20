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
        <div className="w-full flex flex-col">
          {users.map(profile =>
          <div className="flex justify-center">
            <ProfileCard
              profile={profile}
              key={profile._id}
              userProfile={this.props.userProfile}
              handleAddFriend={this.props.handleAddFriend}
              handleRemoveFriend={this.props.handleRemoveFriend}
          />
          </div>
          )}
        </div>
      </>
    )
  }
}

export default Users