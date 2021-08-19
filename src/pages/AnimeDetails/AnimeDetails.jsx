import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'

class AnimeDetails extends Component {
    state = { 
        anime: null
    }

    async componentDidMount() {
        const anime = await animeAPI.getAnimeDetails(this.props.match.params.id)
        this.setState({anime})
    }

    async handleRemoveFromUserCollection(animeId) {
        await animeAPI.removeFromUserCollection(animeId)  
        this.props.history.push(`/profile/${this.props.userProfile._id}`)
    }

    render() { 
        const {anime} = this.state
        console.log()

        if (anime === null) {
            return (
                <>
                <h1>Loading...</h1>
                </>
            )
        }
        else {
            return ( 
                <>
                <h1>Anime Details</h1>
                <AnimeCard title={anime.title} image={anime.image_url} synposis={anime.synopsis} score={anime.score} rated={anime.rated} episodes={anime.episodes}/>

                <h1>{anime.synopsis}</h1>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => this.handleRemoveFromUserCollection(anime._id)}>
                    Remove From Collection
                </button>
                {/* 
                    TODO: Add User Review Section
                */}
                </>
             );
        }
    }
}
 
export default AnimeDetails;