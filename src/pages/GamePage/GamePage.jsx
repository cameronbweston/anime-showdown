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
     //Do some data massaging OR do some data massaging on API side
     //Map each shows id, title, img, synopsis, etc. to showsForGameArray
     this.setState({showsForGame: getShowsForGameResults})
     //Get first 2 shows, set state to match the 2 shows
     //const currentShow1Idx = showsForGame.findIndex(currentShow1)
     //const currentShow2Idx = showsForGame.findIndex(currentShow2)
   }

   handleChoose = () => {
    // e.preventDefault()
    //
    }

  render() { 
    return ( 
      <>
      <h1>Anime Battle!!!</h1>
      <AnimeCard 
        title={this.state.currentShow1.title}
        image={this.state.currentShow1.image}
        synopsis={this.state.currentShow1.synopsis} />
      <button onClick={this.handleChoose(this.state.currentShow1.id)}>Choose Show 1</button>
      <h2>VS.</h2>
      <AnimeCard 
        title={this.state.currentShow2.title}
        image={this.state.currentShow2.image}
        synopsis={this.state.currentShow2.synopsis} />
      <button onClick={this.handleChoose()}>Choose Show 2</button>
      </>
     );
  }
}
 
export default GamePage; 

/* 
1. Get 2 random show indexes (Or first 2 if pre-randomized) from this.state.showsForGameArray
2. P̶a̶s̶s̶ s̶h̶o̶w̶.̶i̶d̶,̶ s̶h̶o̶w̶.̶t̶i̶t̶l̶e̶,̶ s̶h̶o̶w̶.̶i̶m̶g̶,̶ s̶h̶o̶w̶.̶s̶y̶n̶o̶p̶s̶i̶s̶ A̶S̶ P̶R̶O̶P̶S̶,̶ d̶o̶w̶n̶ t̶o̶ a̶n̶i̶m̶e̶ c̶a̶r̶d̶ f̶o̶r̶ d̶i̶s̶p̶l̶a̶y̶i̶n̶g̶
3. Either pass show.id down to AnimeCard or set state to hold show1.id and show2.id so it knows which one is chosen and passed to HANDLECHOOSE()
4. handleChoose() ---> Check if 2 shows left in array ---> Render GAMEWINNINGPAGE
*/