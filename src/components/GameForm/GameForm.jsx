import React, { Component } from 'react' 

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
      isRPlus: false
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
    // this.props.getRandomShowsForGameStart(this.state.formData)
    try {
      history.push("/gamepage")
    } catch (err) {
      console.log(err.message)    }
    }

  render() {
  return ( 
    <div className="flex flex-col justify-center items-center">

      {/* WELCOME BUBBLE */}
      <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
        <div className="text-3xl font-semibold">
          Welcome, { this.props.user.name }!
        </div>
      </div>

      {/* FORM BEGINS */}
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      > 

      {/* QUESTION BUBBLE #1 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight flex justify-center">
          <div className="text-2xl font-semibold">
            <p>Are you looking for an anime series, movie, or manga?</p>
            <div className="text-center">
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="tv"
                name="isTv"
              />
              <label htmlFor="tv">Series</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="movie"
                name="isMovie"
              />
              <label htmlFor="movie">Movie</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="manga"
                name="isManga"
              />
              <label htmlFor="manga">Manga</label>
            </div>
          </div>
        </div> 

      {/* QUESTION BUBBLE #2 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInLeft flex justify-center">
          <div className="text-2xl font-semibold">
            <div className="text-center">
              <p>What genre(s) are you interested in?</p>
              <input
                type="checkbox" 
                id="scifi"
                name="isSciFi"
                onChange={this.handleChange}
              />
              <label htmlFor="scifi">Sci-Fi</label><br/>
              <input
                type="checkbox" 
                id="fantasy"
                name="isFantasy"
                onChange={this.handleChange}
              />
              <label htmlFor="fantasy">Fantasy</label><br/>
              <input
                type="checkbox" 
                id="comedy"
                name="isComedy"
                onChange={this.handleChange}
              />
              <label htmlFor="comedy">Comedy</label><br/>
              <input
                type="checkbox" 
                id="drama"
                name="isDrama"
                onChange={this.handleChange}
              />
              <label htmlFor="drama">Drama</label><br/>
              <input
                type="checkbox" 
                id="action"
                name="isActionAdventure"
                onChange={this.handleChange}
              />
              <label htmlFor="action">Action & Adventure</label><br/>
              <input
                type="checkbox" 
                id="horror"
                name="isHorrorPsych"
                onChange={this.handleChange}
              />
              <label htmlFor="horror">Horror & Psychological</label><br/>
              <input
                type="checkbox" 
                id="mystery"
                name="isCrimeMystery"
                onChange={this.handleChange}
              />
              <label htmlFor="mystery">Crime & Mystery</label>
            </div>
          </div>
        </div>

      {/* QUESTION BUBBLE #3 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight  flex justify-center">
          <div className="text-2xl font-semibold">
            <div className="text-center">
              <p>What rating(s) would be appropriate?</p>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="g"
                name="isG"
              />
              <label htmlFor="g">G - All Ages</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="pg"
                name="isPG"
              />
              <label htmlFor="pg">PG - Children</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="pg13"
                name="isPG13"
              />
              <label htmlFor="pg13">PG-13 - Teens 13 or older</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="r17"
                name="isR17"
              />
              <label htmlFor="r17">R17 - 17+ Recommended (Violence/Profanity)</label><br/>
              <input
                onChange={this.handleChange}
                type="checkbox" 
                id="r"
                name="isRPlus"
              />
              <label htmlFor="r" >R+ - Mild Nudity (Violence/Profanity)</label>
            </div>
          </div>
        </div>

        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInUp flex justify-center">
          <div className="text-3xl font-semibold">
            <button 
              type="submit"
              onClick={this.handleSubmit}
              // disabled={this.state.invalidForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-pulse">
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