import React, { Component } from 'react';
import '../../components/AnimeCard/AnimeCard'
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'

class AnimeDetails extends Component {
    state = { 
        searchResult:{} 
    }

    // async componentDidMount(){
    //     const searchResult = await animeAPI.searchAnime(this.props.match.params.id)
    //     this.setState({searchResult})
    // }
    render() { 
        const {searchResult} = this.state
        return ( 
            <>
            <h1>{searchResult.title}</h1>
            <h1>{searchResult.Genre}</h1>
            <AnimeCard />
            </>
         );
    }
}
 
export default AnimeDetails;