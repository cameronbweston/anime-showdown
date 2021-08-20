import React, { Component } from 'react';
import * as animeAPI from '../../services/animeService'
import AnimeCard from '../../components/AnimeCard/AnimeCard';

class AnimeSearch extends Component {
    state = { 
        searchResults:[]
    }
    async componentDidMount() {
        const { params } = this.props.match
        {
          const searchResults = await animeAPI.searchAnime( this.props.match.query)
          this.setState({ searchResults: searchResults.results })
        } 
      }
      async componentDidUpdate(prevProps) {
        const { params } = this.props.match
        if (params.query !== prevProps.match.params.query){
          if (params.searchType === 'byName') {
            const searchResults = await animeAPI.searchAnime( params.query)
            this.setState({ searchResults: searchResults.results })
          }}}
    render() { 
        return ( <> 
            <h1>Anime Results</h1>
              {this.state.searchResults?.map((anime)=>
                <AnimeCard 
                  userProfile={this.props.userProfile}
                  key={anime.id}
                />
              )}
        </>);
    }
}
 
export default AnimeSearch;