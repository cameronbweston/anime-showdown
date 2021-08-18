import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ profile, userProfile, handleAddFriend, handleRemoveFriend}) => {
  return (
    <>
    <Link
        to={{
          pathname: '/profile/:id',
          state: {profile}
        }}
        >
        <div>
          <h4>{profile.name}</h4>  
          <img src='/defaultProfileImg.png' alt='avatar' />
        </div>
    </Link>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleAddFriend(profile._id)}>Add Friend</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleRemoveFriend(profile._id)}>Remove Friend</button> 
      }   
    </>
  );
}
 
export default ProfileCard;
