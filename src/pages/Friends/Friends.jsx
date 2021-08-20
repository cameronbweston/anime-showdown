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
            <div className="flex flex-col justify-center items-center">
              <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight">
                <div className="text-3xl font-semibold">
                	My Friends
                </div>
              </div>
            </div>
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