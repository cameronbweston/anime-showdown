import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                <div className="">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-semibold text-center mt-10">
                      {profile?.name}'s Profile
                    </div>
                    <div className="flex justify-center mt-10 rounded-xl">
                      <img src="/defaultProfileImg.png" alt="Avatar" className=" rounded-2xl"/>
                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg">
                      Anime Collection
                    </div>
                    <div className="flex justify-evenly">

                    {animes.map(show =>
                    <div className="flex flex-col w-72 items-center">
                      <img src={show.image_url} alt="poster" className="w-4/5 rounded-lg" />
                      <div className="font-semibold bg-grey text-center rounded-md mt-2">
                        {show.title}
                      </div>
                      <div className="flex flex-col items-center">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-4/5 my-2'>
                            <a href={show.url}>View on MyAnimeList</a>
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-4/5 mb-2'>
                            <a href={`/animes/${show.mal_id}`}>Details</a>
                        </button>
                      </div>
                    </div>
                  )}

                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg">
                      Manga Collection
                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg">
                      Friends
                    </div>
                    <div className="">
                      {/* <h2>Friends</h2>
                        {profile.friends.map(profile => 
                          <>
                            <h3 key={profile._id}>
                              {profile.name}
                            </h3>
                          </>
                        )} */}
                    </div>
                  </div>
                </div>
              );
        }
    }
}
 
export default ProfileDetails;