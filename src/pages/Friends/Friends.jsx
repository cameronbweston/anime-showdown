import React, { Component } from 'react'
import { getAllProfiles } from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

class Friends extends Component {
  state = {
    profile: null
  }


  render() { 
      const profile = this.props.userProfile
        return (
          <>
            <h1>My Friends</h1>
            {profile?.friends?.map(profile => 
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