import React, { Component } from 'react'

let newArray = []

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
    // this.state.formData.type.push(e.target.value)
    // this.setState()
    // console.log(this.state)
		// const formData = {...this.state.formData, [e.target.name]: e.target.value};
		// this.setState({
		// formData,
		// invalidForm: !this.formRef.current.checkValidity()
		// });
	};

  handleRatedChange = e => {
    // this.state.formData.rated.push(e.target.value)
    // this.setState()
    // console.log(this.state)
		// const formData = {...this.state.formData, [e.target.name]: e.target.value};
		// this.setState({
		// formData,
		// invalidForm: !this.formRef.current.checkValidity()
		// });
	};

  handleSubmit = history => {
    if (document.getElementById('scifi').checked) {
      newArray.push(24, 18, 29, 31, 11)
      this.state.formData.genre.push(24, 18, 29, 31, 11)
    }
    if (document.getElementById('fantasy').checked) {
      newArray.push(6, 10, 16, 32, 37, 42)
      this.state.formData.genre.push(6, 10, 16, 32, 37, 42)
    }
    if (document.getElementById('comedy').checked) {
      newArray.push(4, 20, 35)
      this.state.formData.genre.push(4, 20, 35)
    }
    if (document.getElementById('drama').checked) {
      newArray.push(8, 9, 19, 22, 25, 26, 28, 30, 33, 34, 35, 43)
      this.state.formData.genre.push(8, 9, 19, 22, 25, 26, 28, 30, 33, 34, 35, 43)
    }
    if (document.getElementById('action').checked) {
      newArray.push(1, 2, 3, 13, 17, 21, 23, 27, 31, 36, 38)
      this.state.formData.genre.push(1, 2, 3, 13, 17, 21, 23, 27, 31, 36, 38)
    }
    if (document.getElementById('horror').checked) {
      newArray.push(5, 32, 14, 37, 40, 41, 42)
      this.state.formData.genre.push(5, 32, 14, 37, 40, 41, 42)
    }
    if (document.getElementById('mystery').checked) {
      newArray.push(7, 39)
      this.state.formData.genre.push(7, 39)
    }
    console.log('newArray -> ' + newArray)
    console.log('stateArray -> ' + this.state.formData.genre)
    // this.state.formData.genre.push(newArray)
    this.setState()

    console.log(this.state.formData.genre)

    // this.props.history.push('/gamepage');

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
                type="checkbox" 
                value={[24, 18, 29, 31, 11]}
                id="scifi"
                name="scifi"
              />
              <label htmlFor="scifi">Sci-Fi</label><br/>
              <input
                type="checkbox" 
                value={[6, 10, 16, 32, 37, 42]}
                id="fantasy"
                name="fantasy"
              />
              <label htmlFor="fantasy">Fantasy</label><br/>
              <input
                type="checkbox" 
                value={[4, 20, 35]}
                id="comedy"
                name="comedy"
              />
              <label htmlFor="comedy">Comedy</label><br/>
              <input
                type="checkbox" 
                value={[8, 9, 19, 22, 25, 26, 28, 30, 33, 34, 35, 43]}
                id="drama"
                name="drama"
              />
              <label htmlFor="drama">Drama</label><br/>
              <input
                type="checkbox" 
                value={[1, 2, 3, 13, 17, 21, 23, 27, 31, 36, 38]}
                id="action"
                name="action"
              />
              <label htmlFor="action">Action & Adventure</label><br/>
              <input
                type="checkbox" 
                value={[5, 32, 14, 37, 40, 41, 42]}
                id="horror"
                name="horror"
              />
              <label htmlFor="horror">Horror & Psychological</label><br/>
              <input
                type="checkbox" 
                value={[7, 39]}
                id="mystery"
                name="mystery"
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