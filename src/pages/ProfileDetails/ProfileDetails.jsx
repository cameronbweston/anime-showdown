import React, { Component } from 'react';
import * as profileAPI from '../../services/profileService'


class ProfileDetails extends Component {
    state = { 
        profile: null,
        animes: null
     }

     async componentDidMount() {
         const profile = await profileAPI.getProfileDetails(this.props.match.params.id)
         const animes = profile.animeCollection
         this.setState({profile, animes})
     }

    render() { 
        const {profile, animes} = this.state

        if(profile === null) {
            return(
                <>
                <h1>Loading</h1>
                </>
            )
        }
        else {
            return (
                <>
                  <h1>{profile?.name}'s Profile</h1>
            
                  {/* <h2>Friends</h2>
                  {profile.friends.map(profile => 
                    <>
                      <h3 key={profile._id}>
                        {profile.name}
                      </h3>
                    </>
                  )} */}
            
                  <h2>Anime Collection</h2>
                  {animes.map(show =>
                  //TODO: Write Anime Details page for this Anchor Tag
                    <div>
                        <p>{show.title}</p>
                        <img src={show.image_url} alt="poster" />
                        <form action={show.url}></form>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            <a href={show.url}>View on AniList</a>
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            <a href={`/animes/${show.mal_id}`}>Details</a>
                        </button>
                    </div>
                  )}
                  //TODO: Write a Manga Collection and Manga Details page
                </>
              );
        }
    }
}
 
export default ProfileDetails;