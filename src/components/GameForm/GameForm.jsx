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
    <form
    ref={this.formRef}
    onSubmit={this.handleSubmit}
    >
      <div className="my-5">
        <p>Are you looking for an anime series, movie, or manga?</p>
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

      <div className="my-5">
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

      <div className="my-5">
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
        <label htmlFor="r17">R - 17+ recommended (violence & profanity)</label><br/>
        <input
          onChange={e => this.handleRatedChange(e)}
          type="checkbox" 
          value="r"
          id="r"
          name="rated"
          />
        <label htmlFor="r" >R+ - Mild Nudity (may also contain violence & profanity)</label>
      </div>
      <div>
        <button 
        disabled={this.state.invalidForm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </form>

/* 
          <div className="flex flex-col justify-center items-center">
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
              <div className="text-3xl font-semibold">
                Welcome, { this.props.user.name }!
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight">
              <div className="text-3xl font-semibold">
                Are you looking for an&nbsp;
                    <a href="/" className="text-red-600 hover:text-red-200 underline">
                      anime
                    </a>,&nbsp;
              
                    <a href="/" className="text-red-600 hover:text-red-200 underline">
                      movie
                    </a>
       
                  , or <a href="/" className="text-red-600 hover:text-red-200 underline">manga</a>?
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInDown">
              <div className="text-3xl font-semibold">
                Genres of interest?
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInUp">
              <div className="text-3xl font-semibold">
                Do you want a movie or show?
              </div>
            </div>
          </div>
*/
   );
  }
}
 
export default GameForm;