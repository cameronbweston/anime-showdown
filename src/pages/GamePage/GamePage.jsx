import React, { Component } from 'react';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'

class GamePage extends Component {
  state = { 
    showsForGame: {},
    currentShow1: null,
    currentShow2: null
   }

   async componentDidMount() {
     const getShowsForGameResults = await animeAPI.getRandomShowsForGameStart()
     //Do some data massaging
     //Map each shows id, title, img, synopsis, etc. to showsForGameArray
     this.setState({getShowsForGameResults})
   }

   async componentWillUnmount() {
     //Scrub and delete everything
   }

   handleChoose = () => {
    // e.preventDefault()

    }

  render() { 
    return ( 
      <>
      <h1>Anime Battle!!!</h1>
      <AnimeCard />
      <button onClick={this.handleChoose()}>Choose Show 1</button>
      <h2>VS.</h2>
      <AnimeCard />
      <button onClick={this.handleChoose()}>Choose Show 2</button>
      </>
     );
  }
}
 
export default GamePage; 

/* 
1. Get 2 random show indexes (Or first 2 if pre-randomized) from this.state.showsForGameArray
2. Pass show.id, show.title, show.img, show.synopsis AS PROPS, down to anime card for displaying
3. Either pass show.id down to AnimeCard or set state to hold show1.id and show2.id so it knows which one is chosen and passed to HANDLECHOOSE()
4. handleChoose() ---> Check if 2 shows left in array ---> Render GAMEWINNINGPAGE
*/