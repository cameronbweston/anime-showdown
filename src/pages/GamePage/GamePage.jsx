import React, { Component } from 'react';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'
import './GamePage.css'

class GamePage extends Component {
  state = { 
    showsForGame: [],
    show1Idx: null,
    show2Idx: null,
    gameOver: false
   }

   async componentDidMount() {
     const showsForGame = await animeAPI.getRandomShowsForGameStart()
     const show1Idx = 0
     const show2Idx = 1
     this.setState({
       showsForGame,
       show1Idx,
       show2Idx
       //Add counter for times each show was clicked
    })
   }

  handleChoose = (idx) => {
    //Splice selected show idx from array and remove it
    const showsForGame = this.state.showsForGame
    showsForGame.splice(idx, 1)

    //CHECK FOR END GAME WIN CONDITIONS FIRST (showsForGame.length == 2)
    if (showsForGame.length === 1) {
      //Render game winning page
      const gameOver = true
      this.setState({gameOver})
    } 
    //Select 2 more shows (random or not) 
    //May need to make sure these random ints are never the same --->
    const show1Idx = Math.floor(Math.random() * showsForGame.length)
    const show2Idx = Math.floor(Math.random() * showsForGame.length)

    // Update the state
    this.setState({ 
      showsForGame,
      show1Idx,
      show2Idx
   })
  }

  synopsisToggle() {
    
  }

  render() { 
    const { showsForGame } = this.state
    const { show1Idx } = this.state
    const { show2Idx } = this.state

    console.log(showsForGame[0])
    if (this.state.gameOver) {
      return (
        <>
          <h1>You Should Watch:</h1>
          <AnimeCard 
            title={showsForGame[0].title}
            image={showsForGame[0].image_url}
            synopsis={showsForGame[0].synopsis} 
            score={showsForGame[0].score}
            rated={showsForGame[0].rated}
            episodes={showsForGame[0].episodes}
            />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => this.props.handleAddToUserCollection(showsForGame[0])}>Add to Collection</button>
        </>
      )
    }

    let isLoading = true
    if(this.state.showsForGame.length > 0) {
      isLoading = false
    }
    
    return (       
      <>
      {isLoading ? 
        <>
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex justify-center">
              <div className="text-5xl mb-8">LOADING</div>  
            </div>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
          </div>
        </>

        :

      <>
      <div className="flex flex-col justify-center items-center">
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight my-10">
          <div className="text-3xl font-semibold">
            Choose which anime moves on to the next round!
          </div>
        </div>
      </div>

      <div className="w-screen flex justify-evenly">
          <AnimeCard 
            title={showsForGame[show1Idx].title}
            image={showsForGame[show1Idx].image_url}
            synopsis={showsForGame[show1Idx].synopsis} 
            score={showsForGame[show1Idx].score}
            rated={showsForGame[show1Idx].rated}
            episodes={showsForGame[show1Idx].episodes}
          />
          <div className="max-w-xl py-3">
            <div className="bg-white shadow-2xl border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8  h-full">
              <span className="font-bold" onClick={this.synopsisToggle}>Synopsis</span>
              <span className="text-gray-400">{showsForGame[show1Idx].synopsis}</span>
            </div>
          </div>
      </div>
          {/* PASS in the show index to delete*/}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => this.handleChoose(show2Idx)}>
          Choose Show 1
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' id="synopsis">
          Synopsis
        </button>
        <p className="text-5xl">VS.</p>
        <AnimeCard 
           title={showsForGame[show2Idx].title}
           image={showsForGame[show2Idx].image_url}
           synopsis={showsForGame[show2Idx].synopsis} 
           score={showsForGame[show2Idx].score}
           rated={showsForGame[show2Idx].rated}
           episodes={showsForGame[show2Idx].episodes}
          />
          {/* PASS in the show index to delete*/}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => this.handleChoose(show1Idx)}>
          Choose Show 2
        </button>
      </> 
      }
      </>
     );
  }
}
 
export default GamePage; 
