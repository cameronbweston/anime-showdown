import React, { Component } from 'react';
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

    render() { 
        const {anime} = this.state

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
                </>
             );
        }
    }
}
 
export default AnimeDetails;