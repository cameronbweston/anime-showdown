import React, { Component } from 'react';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'

class GamePage extends Component {
  state = { 
    showsForGame: [],
    show1Idx: null,
    show2Idx: null
   }

   async componentDidMount() {
     const showsForGame = await animeAPI.getRandomShowsForGameStart()
     const show1Idx = 0
     const show2Idx = 1
     this.setState({
       showsForGame,
       show1Idx,
       show2Idx
    })
   }
    
    //this.setState({showsForGame: getShowsForGameResults})
    //1. Get first 2 shows, set state to match the 2 shows
    //2. const currentShow1Idx = showsForGame.findIndex(currentShow1)
    //3. const currentShow2Idx = showsForGame.findIndex(currentShow2)
   

   handleChoose = () => {
     //
     //4. Splice select show idx from array and remove it
     //CHECK FOR END GAME WIN CONDITIONS FIRST (showsForGame.length == 2) 
    //5. Select 2 more shows (random or not) 
    //6. Update currentShow1 state with new show
    //7. Update currentShow2 state with new show
    //8. Re-render AnimeCards and let user go again...
    }

  render() { 
    const { showsForGame } = this.state
    const { show1Idx } = this.state
    const { show2Idx } = this.state
    //console.log(`component state: ${this.state.showsForGame}`)
    let isLoading = true
    if(this.state.showsForGame.length > 0) {
      isLoading = false
    }
    return (       
      <>
      {isLoading ? 
        <div>
          <h1>Loading...</h1>  
        </div>

        :

      <div>
        <h1>Anime Battle!!!</h1>
        <AnimeCard 
           title={showsForGame[show1Idx].title}
           image={showsForGame[show1Idx].image_url}
           synopsis={showsForGame[show1Idx].synopsis} 
           score={showsForGame[show1Idx].score}
           rated={showsForGame[show1Idx].rated}
           episodes={showsForGame[show1Idx].episodes}
          />
        <button onClick={this.handleChoose(this.state.currentShow1)}>Choose Show 1</button>
        <h2>VS.</h2>
        <AnimeCard 
           title={showsForGame[show2Idx].title}
           image={showsForGame[show2Idx].image_url}
           synopsis={showsForGame[show2Idx].synopsis} 
           score={showsForGame[show2Idx].score}
           rated={showsForGame[show2Idx].rated}
           episodes={showsForGame[show2Idx].episodes}
          />
        <button onClick={this.handleChoose(this.state.currentShow2)}>Choose Show 2</button>
      </div> 
      }
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