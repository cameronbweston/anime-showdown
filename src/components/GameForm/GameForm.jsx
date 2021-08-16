import React, { Component } from 'react'

class GameForm extends Component {
  render() {
  return ( 
    
    <form>
      <div className="my-5">
        <p>Are you looking for an anime series, movie, or manga?</p>
        <input
          type="checkbox" 
          value="tv"
          id="tv"
          name="tv"
          />
        <label for="tv">Series</label><br/>
        <input
          type="checkbox" 
          value="movie"
          id="movie"
          name="movie"
          />
        <label for="movie">Movie</label><br/>
        <input
          type="checkbox" 
          value="manga"
          id="manga"
          name="manga"
          />
        <label for="manga">Manga</label>
      </div> 

      <div className="my-5">
        <p>What genres are you interested in?</p>
        <input
          type="checkbox" 
          value="scifi"
          id="scifi"
          name="scifi"
          />
        <label for="scifi">Sci-Fi</label><br/>
        <input
          type="checkbox" 
          value="fantasy"
          id="fantasy"
          name="fantasy"
          />
        <label for="fantasy">Fantasy</label><br/>
        <input
          type="checkbox" 
          value="comedy"
          id="comedy"
          name="comedy"
          />
        <label for="comedy">Comedy</label><br/>
        <input
          type="checkbox" 
          value="Drama"
          id="Drama"
          name="Drama"
          />
        <label for="Drama">Drama</label><br/>
        <input
          type="checkbox" 
          value="action"
          id="action"
          name="action"
          />
        <label for="action">Action</label>
      </div>

      <div className="my-5">
        <p>What rating(s) would be appropriate?</p>
        <input
          type="checkbox" 
          value="g"
          id="rated"
          name="rated"
          />
        <label for="rated">G - All Ages</label><br/>
        <input
          type="checkbox" 
          value="pg"
          id="rated"
          name="rated"
          />
        <label for="rated">PG - Children</label><br/>
        <input
          type="checkbox" 
          value="pg13"
          id="rated"
          name="rated"
          />
        <label for="rated">PG-13 - Teens 13 or older</label><br/>
        <input
          type="checkbox" 
          value="r17"
          id="rated"
          name="rated"
          />
        <label for="rated">R - 17+ recommended (violence & profanity)</label><br/>
        <input
          type="checkbox" 
          value="r17"
          id="rated"
          name="rated"
          />
        <label for="rated" >R+ - Mild Nudity (may also contain violence & profanity)</label>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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