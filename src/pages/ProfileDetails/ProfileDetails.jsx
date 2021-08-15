import React from 'react'

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state
  // const movies = location.state.profile.media.filter(media => media.type === 'movie')
  // const tvs = profile.media.filter(media => media.type === 'tv')
  return (
    <>
      <h1>{profile.name}'s Profile</h1>

      <h2>Friends</h2>
      {profile.friends.map(profile => 
        <>
          <h3 key={profile._id}>
            {profile.name}
          </h3>
        </>
      )}
      <h2>TV Shows</h2>

      <h2>Movies</h2>
    </>
  );
}
 
export default ProfileDetails;