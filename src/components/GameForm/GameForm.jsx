import React, { Component } from 'react' 
import './GameForm.css'

class GameForm extends Component {
  state = {
    invalidForm: null,
    formData: {
      isTv: false,
      isManga: false,
      isMovie: false,
      isSciFi: false,
      isFantasy: false,
      isComedy: false,
      isDrama: false,
      isActionAdventure: false,
      isHorrorPsych: false,
      isCrimeMystery: false,
      isG: false,
      isPG: false,
      isPG13: false,
      isR17: false,
      isRPlus: false,
    }
  }

  formRef = React.createRef();

  handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.checked ? true : false};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = async e => {   
    const { history } = this.props
    e.preventDefault() 
    this.props.getRandomShowsForGameStart(this.state.formData)
    try {
      history.push("/gamepage")
    } catch (err) {
      console.log(err.message)    }
    }

  render() {
    console.log(this.props)
    return ( 
      <div className="flex flex-col justify-center items-center">

      {/* WELCOME BUBBLE */}
      <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
        <div className="text-3xl font-semibold">
          Welcome, { this.props.userProfile?.name }!
        </div>
      </div>

      {/* FORM BEGINS */}
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      > 

        {/* QUESTION BUBBLE #1 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight flex justify-center">
          <div className="text-2xl font-semibold flex flex-col items-center">
            <p className="mb-4">
              Are you looking for an anime series, movie, or manga?
            </p>
            <div className="text-left m-win-max">
              <input
                onChange={this.handleChange}
                className=""
                type="checkbox" 
                id="tv"
                name="isTv"
              />
              <label htmlFor="tv" className="ml-4">Series</label><br/>
              <input
                onChange={this.handleChange}
                className=""
                type="checkbox" 
                id="movie"
                name="isMovie"
              />
              <label htmlFor="movie" className="ml-4">Movie</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="manga"
                name="isManga"
              />
              <label htmlFor="manga" className="ml-4">Manga</label>
            </div>
          </div>
        </div> 

        {/* QUESTION BUBBLE #2 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInLeft flex justify-center">
          <div className="text-2xl font-semibold flex flex-col items-center">
            <p className="mb-4">What genre(s) are you interested in?</p>
            <div className="text-left m-win-max">
              <input
                type="checkbox" 
                id="scifi"
                name="isSciFi"
                onChange={this.handleChange}
              />
              <label htmlFor="scifi" className="ml-4">Sci-Fi</label><br/>
              <input
                type="checkbox" 
                id="fantasy"
                name="isFantasy"
                onChange={this.handleChange}
              />
              <label htmlFor="fantasy" className="ml-4">Fantasy</label><br/>
              <input
                type="checkbox" 
                id="comedy"
                name="isComedy"
                onChange={this.handleChange}
              />
              <label htmlFor="comedy" className="ml-4">Comedy</label><br/>
              <input
                type="checkbox" 
                id="drama"
                name="isDrama"
                onChange={this.handleChange}
              />
              <label htmlFor="drama" className="ml-4">Drama</label><br/>
              <input
                type="checkbox" 
                id="action"
                name="isActionAdventure"
                onChange={this.handleChange}
              />
              <label htmlFor="action" className="ml-4">Action & Adventure</label><br/>
              <input
                type="checkbox" 
                id="horror"
                name="isHorrorPsych"
                onChange={this.handleChange}
              />
              <label htmlFor="horror" className="ml-4">Horror & Psychological</label><br/>
              <input
                type="checkbox" 
                id="mystery"
                name="isCrimeMystery"
                onChange={this.handleChange}
              />
              <label htmlFor="mystery" className="ml-4">Crime & Mystery</label>
            </div>
          </div>
        </div>

        {/* QUESTION BUBBLE #3 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight flex justify-center">
          <div className="text-2xl font-semibold flex flex-col items-center">
            <p>What rating(s) would be appropriate?</p>
            <div className="text-left m-win-max mt-4">
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="g"
                name="isG"
              />
              <label htmlFor="g" className="ml-4">G - All Ages</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="pg"
                name="isPG"
              />
              <label htmlFor="pg" className="ml-4">PG - Children</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="pg13"
                name="isPG13"
              />
              <label htmlFor="pg13" className="ml-4">PG-13 - Teens 13 or older</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="r17"
                name="isR17"
              />
              <label htmlFor="r17" className="ml-4">R17 - 17+ Recommended</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="r"
                name="isRPlus"
              />
              <label htmlFor="r" className="ml-4">R+ - Mild Nudity</label>
            </div>
          </div>
        </div>

        {/*SUBMISSION BUBBLE*/}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInUp flex justify-center">
          <div className="text-3xl font-semibold">
            <button 
              type="submit"
              onClick={this.handleSubmit}
              // disabled={this.state.invalidForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg animate-pulse">
              Showdown!
            </button>
          </div>
        </div>
      </form>
    </div>
   );
  }
}
 
export default GameForm;