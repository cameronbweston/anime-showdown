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
        return await animeAPI.removeFromUserCollection(animeId)    
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
                <button onClick={() => this.handleRemoveFromUserCollection(anime._id)}>
                    Remove From Collection
                </button>
                </>
             );
        }
    }
}
 
export default AnimeDetails;