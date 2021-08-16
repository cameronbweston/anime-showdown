import React, { Component } from 'react';


class AnimeDetails extends Component {
    state = { 
        searchResult:{} 
    }

    async componentDidMount(){
        
    }
    render() { 
        const {searchResult} = this.state
        return ( 
            <>
            <h1>Deadman Wonderland</h1>
            <img src = {'https://thicc.mywaifulist.moe/series/394/530dd079e50bc436fe7336450c2eb028a5a2c4872a74ae1b939ce0131de72ae8.jpeg'}></img>
            <a href = "https://imdb-api.com/title/tt1909447"> View on IMBD</a>
            <h2>Runtime: 1 season </h2>
            </>
         );
    }
}
 
export default AnimeDetails;