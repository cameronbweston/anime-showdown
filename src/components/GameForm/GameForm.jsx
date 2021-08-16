import React, { Component } from 'react'

class GameForm extends Component {
  render() {
  return ( 
    
    

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

   );
  }
}
 
export default GameForm;