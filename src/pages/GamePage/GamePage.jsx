import React, { Component } from 'react';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from '../../services/animeService'
import vsimg from './versus.png'
import swordstrike from './swordstrike.wav'
import LoadingPage from '../../components/LoadingPage/LoadingPage';

class GamePage extends Component {
  state = { 
    showsForGame: [],
    show1Idx: null,
    show2Idx: null,
    gameOver: false,
    synopsisActive: false,
   }

   async componentDidMount() {
     const showsForGame = await animeAPI.getRandomShowsForGameStart()

     this.setState({
       showsForGame,
       show1Idx: 0,
       show2Idx: 1
       //Add counter for times each show was clicked
    })
   }

   synopsisToggle() {
    if (this.state.synopsisActive) {
      this.setState({ synopsisActive: false })
    }
    if (!this.state.synopsisActive) {
      this.setState({ synopsisActive: true })
    }
  }

  handleChoose = (idx) => {
    if (this.state.synopsisActive) {
      this.setState({ synopsisActive: false })
    }
    new Audio(swordstrike).play()
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
    //const show1Idx = Math.floor(Math.random() * showsForGame.length)
    //const show2Idx = Math.floor(Math.random() * showsForGame.length)

    // Update the state
    this.setState({ 
      showsForGame,
   })
  }

  render() { 
    const { showsForGame } = this.state
    const { show1Idx } = this.state
    const { show2Idx } = this.state

    console.log(showsForGame)
    console.log(show1Idx)
    console.log(show2Idx)

    if (this.state.gameOver) {
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInRight">
              <div className="text-3xl font-semibold">
                You should watch...
              </div>
            </div>
          </div>
          <div className="flex justify-evenly min-h-full sm:pt-12 animate__animated animate__fadeInLeft">
          
          <AnimeCard 
            title={showsForGame[0].title}
            image={showsForGame[0].image_url}
            synopsis={showsForGame[0].synopsis} 
            score={showsForGame[0].score}
            rated={showsForGame[0].rated}
            episodes={showsForGame[0].episodes}
            />
          </div> 
          <div className="flex justify-evenly mt-20">
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate__animated animate__flipInX animate-pulse' 
              onClick={() => {
                this.props.handleAddToUserCollection(showsForGame[0])
                this.props.history.push(`/profile/${this.props.userProfile._id}`)
              }}
            >
              Add to Collection
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate__animated animate__flipInX animate-pulse'>
              <a href={`/*this.state.show.url*/`}> More Details</a>
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate__animated animate__flipInX animate-pulse'>
              <a href='/*this.state.show.url*/'>View on MyAnimeList</a>
            </button>
            
          </div>   
          <div className="flex flex-col justify-center items-center">
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-20 animate__animated animate__backInRight">
              <div className="text-3xl font-semibold">
                Come back and let us know what you think!
              </div>
            </div>
          </div>   
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
          <LoadingPage/>
        </>
        :
      <>
      <div className="flex flex-col justify-center items-center">
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
          <div className="text-3xl font-semibold">
            Choose which anime moves on to the next round!
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly min-h-full sm:pt-12 animate__animated animate__fadeInRight animate__delay-1s">
          <AnimeCard 
            title={showsForGame[show1Idx].title}
            image={showsForGame[show1Idx].image_url}
            synopsis={showsForGame[show1Idx].synopsis} 
            score={showsForGame[show1Idx].score}
            rated={showsForGame[show1Idx].rated}
            episodes={showsForGame[show1Idx].episodes}
            showIdx={this.state.show1Idx}
            show1={this.state.show1Idx}
            handleChoose={() => this.handleChoose(1)}
            synopsisToggle={this.synopsisToggle}
          />
        </div>
          
        <div className="flex flex-col justify-center items-center">
               <img className="object-contain w-60 animate__animated animate__rotateIn" src={vsimg} alt="VS" />
        </div>

      <div className="flex flex-row-reverse justify-evenly min-h-full animate__animated animate__fadeInLeft animate__delay-1s">
        <AnimeCard 
           title={showsForGame[show2Idx].title}
           image={showsForGame[show2Idx].image_url}
           synopsis={showsForGame[show2Idx].synopsis} 
           score={showsForGame[show2Idx].score}
           rated={showsForGame[show2Idx].rated}
           episodes={showsForGame[show2Idx].episodes}
           showIdx={this.state.show2Idx}
           show2={this.state.show2Idx}
           handleChoose={() => this.handleChoose(0)}
           synopsisToggle={this.synopsisToggle}
          />
        </div>
      </> 
      }
      </>
     );
  }
}
 
export default GamePage; 
