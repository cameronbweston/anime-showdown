import React, { Component } from 'react'
import { getAllProfiles } from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

class Friends extends Component {
  state = {
    friends: []
  }

  async componentDidMount() {
    //const friends = await getAllFriends()
    this.setState({ friends })
  }

  render() { 
    return (
      <>
        <h1>Friends List</h1>
        {this.state.friends.map(profile => 
          <ProfileCard
            profile={profile}
            key={profile._id}
            userProfile={this.props.userProfile}
            handleAddFriend={this.props.handleAddFriend}
            handleRemoveFriend={this.props.handleRemoveFriend}
          />
        )}
      </>
    );
  }
}
 
export default Friends;