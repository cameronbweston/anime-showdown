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
                      <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight">
                        <div className="text-3xl font-semibold">
                          {profile?.name}'s Profile
                        </div>
                      </div>
                    <div className="flex justify-center mt-10 rounded-xl">
                      <img src="/defaultProfileImg.png" alt="Avatar" className=" rounded-2xl shadow-2xl animate__animated animate__flipInY"/>
                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg shadow-2xl">
                      Anime Collection
                    </div>
                    <div className="flex justify-evenly">

                    {animes.map(show =>
                    <div className="flex flex-col w-72 items-center">
                      <img src={show.image_url} alt="poster" className="h-80 rounded-lg shadow-2xl animate__animated animate__flipInY" />
                      <div className="font-semibold bg-grey text-center rounded-md mt-2">
                        {show.title}
                      </div>
                      <div className="flex flex-col items-center">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-4/5 my-2 shadow-2xl'>
                            <a href={show.url}>View on MyAnimeList</a>
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-4/5 mb-2 shadow-2xl'>
                            <a href={`/animes/${show.mal_id}`}>Details</a>
                        </button>
                      </div>
                    </div>
                  )}

                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg shadow-2xl">
                      Manga Collection
                    </div>
                    <div className="text-xl font-semibold text-center mt-10 mb-2 bg-blue-300 text-white w-96 rounded-lg shadow-2xl">
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