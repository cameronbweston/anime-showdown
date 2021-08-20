import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
  const [userProfile, setUserProfile] = useState(props.userProfile)

  useEffect(() => {
    setUserProfile(props.userProfile)
  }, [props.userProfile])

  return (
    <div className="mt-10 animate__animated animate__flipInY">
      <Link
        to={{
          pathname: `/profile/${props.profile._id}`,
          state: props.profile
        }}
        >
        <div className="flex flex-col justify-center items-center">
          <div className="w-min text-3xl">
            {props.profile.name}
          </div>  
          <img src='/defaultProfileImg.png' alt='avatar' className="rounded-2xl"/>
          
        </div>
      </Link>
      <div className="flex justify-center">
        <div className="w-max my-2">
          { !(userProfile?._id === props.profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === props.profile._id)) &&
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' onClick={() => props.handleAddFriend(props.profile._id)}>
              Add Friend
            </button> 
          }
        </div>
        <div className="w-max my-2">
          { !(userProfile?._id === props.profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === props.profile._id)) &&
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full' onClick={() => props.handleRemoveFriend(props.profile._id)}>
              Remove Friend
            </button> 
          }   
        </div>
      </div>
    </div>
  );
}
 
export default ProfileCard;
