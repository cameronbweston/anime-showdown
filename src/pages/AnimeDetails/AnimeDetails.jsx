import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'
import * as reviewAPI from '../../services/reviewService'
import LoadingPage from '../../components/LoadingPage/LoadingPage'

class AnimeDetails extends Component {
    state = { 
        anime: null,
        review:[]
    }

    async componentDidMount() {
        const anime = await animeAPI.getAnimeDetails(this.props.match.params.id)
        this.setState({anime})
    }

    async handleRemoveFromUserCollection(animeId) {
        await animeAPI.removeFromUserCollection(animeId)  
        this.props.history.push(`/profile/${this.props.userProfile._id}`)
    }

   handleAddReview = async e =>{
        // e.preventDefault()
        console.log(e)
        const review = await reviewAPI.addReview(review)

       
   }

  
    

    render() { 
        const {anime, review} = this.state
        console.log()

        if (anime === null) {
            return (
                <>
                    <LoadingPage/>
                </>
            )
        }
        else {
            return ( 
                <>
	                <div className="flex flex-col justify-center items-center">
                		<div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight">
                			<div className="text-3xl font-semibold">
                				Anime Details
                			</div>
                		</div>
                	</div>

									<div className="flex justify-evenly min-h-full sm:pt-12 animate__animated animate__fadeInLeft">
                		<AnimeCard 
											title={anime.title} 
											image={anime.image_url} 
											synposis={anime.synopsis} 
											score={anime.score} 
											rated={anime.rated} 
											episodes={anime.episodes}
										/>
									</div>

									<div className="flex flex-col justify-center items-center mt-10">
                		<div className="border max-w-4xl p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight">
                			<div className="text-xl font-semibold">
                				{anime.synopsis}
                			</div>
                		</div>
										<div className="w-2/5">
										<div className="border max-w-4xl p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
                			<div className="text-xl font-semibold text-center">
                				Leave A Review
                			</div>
												<form 
													className="flex flex-col"
													onClick={()=>this.handleAddReview(this.state.animeId)} >
                					<input type="text" name="comment" className="bg-blue-100 opacity-30 rounded-lg h-44"/>
                					<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-5'>
                    				Submit
                					</button>
                				</form>
                		</div>



										</div>
										<button 
											className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-10 animate__animated animate__backInUp' 
											onClick={() => this.handleRemoveFromUserCollection(anime._id)}
										>
                    	Remove From Collection
                		</button>
                	</div>

                
                {/* 
                    TODO: Add User Review Section
                */}
                
                 
                        
                
                
        
                </>
             );
        }
    }
}
 
export default AnimeDetails;