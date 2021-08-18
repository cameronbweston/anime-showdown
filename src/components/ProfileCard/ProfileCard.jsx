import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ user, userProfile, handleAddFriend, handleRemoveFriend}) => {
  return (
    <>
    <Link
        to={{
          pathname: '/profile/:id',
          state: {user}
        }}
      >
        <h4>{user.name}</h4>
      </Link>
      { !(userProfile?._id === user._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === user._id)) &&
      <button onClick={() => handleAddFriend(user._id)}>Befriend {user.name}</button> 
      }
      { !(userProfile?._id === user._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === user._id)) &&
      <button onClick={() => handleRemoveFriend(user._id)}>Defriend {user.name}</button> 
      }   
    </>
  );
}
 
export default ProfileCard;
