import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
  const [userProfile, setUserProfile] = useState(props.userProfile)

  useEffect(() => {
    setUserProfile(props.userProfile)
  }, [props.userProfile])

  return (
    <div className="">
      <Link
        to={{
          pathname: `/profile/${props.profile._id}`,
          state: props.profile
        }}
        >
        <div className="flex flex-col justify-center">
          <div className="w-min border">{props.profile.name}</div>  
          <img src='/defaultProfileImg.png' alt='avatar' />
          
        </div>
      </Link>
      { !(userProfile?._id === props.profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === props.profile._id)) &&
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => props.handleAddFriend(props.profile._id)}>Add Friend</button> 
      }
      { !(userProfile?._id === props.profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === props.profile._id)) &&
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => props.handleRemoveFriend(props.profile._id)}>Remove Friend</button> 
      }   
    </div>
  );
}
 
export default ProfileCard;
