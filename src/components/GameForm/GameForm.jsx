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

  handleChange = (e) => {
    switch(e.target.name) {
      case 'genre':
        let formGenreArray = this.state.formData.genre
        let targetArray = e.target.value.split(`,`).map((num) => parseInt(num))
        
        let upGenre = formGenreArray.concat(formGenreArray.push(targetArray))
        
        // this.state.formData.genre.push(e.target.value.split(`,`).map((num) => parseInt(num)))
        console.log(targetArray.flat())




        break
      case 'type':
        this.state.formData.type.push(e.target.value)
        console.log(this.state.formData.type)
        break
      case 'rated':
        this.state.formData.rated.push(e.target.value)
        console.log(this.state.formData.rated)
        break
      default:
        console.log('fix name field in form')
    }
    // console.log(e.target.value)

    // console.log(this.state)
  }

  handleSubmit = async e => {   
    const { history } = this.props
    e.preventDefault()
    try {
      history.push('/')
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
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="tv"
                id="tv"
                name="type"
              />
              <label htmlFor="tv">Series</label><br/>
              <input
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="movie"
                id="movie"
                name="type"
              />
              <label htmlFor="movie">Movie</label><br/>
              <input
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="manga"
                id="manga"
                name="type"
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
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="scifi">Sci-Fi</label><br/>
              <input
                type="checkbox" 
                value={10}
                id="fantasy"
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="fantasy">Fantasy</label><br/>
              <input
                type="checkbox" 
                value={[4, 20, 35]}
                id="comedy"
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="comedy">Comedy</label><br/>
              <input
                type="checkbox" 
                value={[8, 9, 19, 22, 25, 26, 28, 30, 33, 34, 35, 43]}
                id="drama"
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="drama">Drama</label><br/>
              <input
                type="checkbox" 
                value={[1, 2, 3, 13, 17, 21, 23, 27, 31, 36, 38]}
                id="action"
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="action">Action & Adventure</label><br/>
              <input
                type="checkbox" 
                value={[5, 32, 14, 37, 40, 41, 42]}
                id="horror"
                name="genre"
                onChange={e => this.handleChange(e)}
              />
              <label htmlFor="horror">Horror & Psychological</label><br/>
              <input
                type="checkbox" 
                value={[7, 39]}
                id="mystery"
                name="genre"
                onChange={e => this.handleChange(e)}
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
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="g"
                id="g"
                name="rated"
              />
              <label htmlFor="g">G - All Ages</label><br/>
              <input
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="pg"
                id="pg"
                name="rated"
              />
              <label htmlFor="pg">PG - Children</label><br/>
              <input
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="pg13"
                id="pg13"
                name="rated"
              />
              <label htmlFor="pg13">PG-13 - Teens 13 or older</label><br/>
              <input
                onChange={e => this.handleChange(e)}
                type="checkbox" 
                value="r17"
                id="r17"
                name="rated"
              />
              <label htmlFor="r17">R17 - 17+ Recommended (Violence/Profanity)</label><br/>
              <input
                onChange={e => this.handleChange(e)}
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
              type="submit"
              // onClick={e => this.handleSubmit(e)}
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