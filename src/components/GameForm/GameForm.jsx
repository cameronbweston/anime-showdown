import React, { Component } from 'react'

class GameForm extends Component {
  state = {
    invalidForm: null,
    formData: {
      type: [],
      genre: [],
      rated: [],
    }
  }

  formRef = React.createRef();

  handleTypeChange = e => {
    this.state.formData.type.push(e.target.value)
    this.setState()
    console.log(this.state)
		// const formData = {...this.state.formData, [e.target.name]: e.target.value};
		// this.setState({
		// formData,
		// invalidForm: !this.formRef.current.checkValidity()
		// });
	};

  handleGenreChange = e => {
    this.state.formData.genre.push(e.target.value)
    this.setState()
    console.log(this.state)
  }

  handleRatedChange = e => {
    this.state.formData.rated.push(e.target.value)
    this.setState()
    console.log(this.state)
  }

  handleSubmit = history => {
    this.props.history.push('/gamepage');
    // const formData = {}
    // this.setState({
    //   formData,
    //   invalidForm: !this.formRef.current.checkValidity()
    // })
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
                onChange={e => this.handleTypeChange(e)}
                type="checkbox" 
                value="tv"
                id="tv"
                name="tv"
              />
              <label htmlFor="tv">Series</label><br/>
              <input
                onChange={e => this.handleTypeChange(e)}
                type="checkbox" 
                value="movie"
                id="movie"
                name="movie"
              />
              <label htmlFor="movie">Movie</label><br/>
              <input
                onChange={e => this.handleTypeChange(e)}
                type="checkbox" 
                value="manga"
                id="manga"
                name="manga"
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
                onChange={e => this.handleGenreChange(e)}
                type="checkbox" 
                value="[24, 18, 29, 31, 11]"
                id="scifi"
                name="scifi"
              />
              <label htmlFor="scifi">Sci-Fi</label><br/>
              <input
                onChange={e => this.handleGenreChange(e)}
                type="checkbox" 
                value="fantasy"
                id="fantasy"
                name="fantasy"
              />
              <label htmlFor="fantasy">Fantasy</label><br/>
              <input
                onChange={e => this.handleGenreChange(e)}
                type="checkbox" 
                value="comedy"
                id="comedy"
                name="comedy"
              />
              <label htmlFor="comedy">Comedy</label><br/>
              <input
                onChange={e => this.handleGenreChange(e)}
                type="checkbox" 
                value="Drama"
                id="Drama"
                name="Drama"
              />
              <label htmlFor="Drama">Drama</label><br/>
              <input
                onChange={e => this.handleGenreChange(e)}
                type="checkbox" 
                value="action"
                id="action"
                name="action"
              />
              <label htmlFor="action">Action</label>
            </div>
          </div>
        </div>

      {/* QUESTION BUBBLE #3 */}
        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight  flex justify-center">
          <div className="text-2xl font-semibold">
            <div className="text-center">
              <p>What rating(s) would be appropriate?</p>
              <input
                onChange={e => this.handleRatedChange(e)}
                type="checkbox" 
                value="g"
                id="g"
                name="rated"
              />
              <label htmlFor="g">G - All Ages</label><br/>
              <input
                onChange={e => this.handleRatedChange(e)}
                type="checkbox" 
                value="pg"
                id="pg"
                name="rated"
              />
              <label htmlFor="pg">PG - Children</label><br/>
              <input
                onChange={e => this.handleRatedChange(e)}
                type="checkbox" 
                value="pg13"
                id="pg13"
                name="rated"
              />
              <label htmlFor="pg13">PG-13 - Teens 13 or older</label><br/>
              <input
                onChange={e => this.handleRatedChange(e)}
                type="checkbox" 
                value="r17"
                id="r17"
                name="rated"
              />
              <label htmlFor="r17">R17 - 17+ Recommended (Violence/Profanity)</label><br/>
              <input
                onChange={e => this.handleRatedChange(e)}
                type="checkbox" 
                value="r"
                id="r"
                name="rated"
              />
              <label htmlFor="r" >R+ - Mild Nudity (Violence/Profanity)</label>
            </div>
          </div>
        </div>

        <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInUp flex justify-center">
          <div className="text-3xl font-semibold">
            <button 
              disabled={this.state.invalidForm}
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