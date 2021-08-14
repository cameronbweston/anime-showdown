import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './AnimeCard.module.css'


class AnimeCard extends Component {
  state = {
    
  }


  render() {
    const { email, pw } = this.state
    return (
      <>
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div class="h-48 overflow-visible w-1/2">
                <img class="rounded-3xl shadow-lg" src="https://images-na.ssl-images-amazon.com/images/I/81iDNjn-r3L.jpg" alt=""/>
              </div>
              <div class="flex flex-col w-1/2 space-y-4">
                <div class="flex justify-between items-start">
                  <h2 class="text-3xl font-bold">Death Note</h2>
                  <div class="bg-yellow-400 font-bold rounded-xl p-2">
                    7.2
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Series</div>
                  <div class="text-lg text-gray-800">2006</div>
                </div>
                <p class=" text-gray-400 max-h-40 overflow-y-hidden">Synopsis -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
{/* progress bars below */}
            <div class="relative pt-1 ml-72">
              <div>
                <div class="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 mt-2">
                  <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500" id="violence-bar">
                    Violence
                  </div>
                </div>
                <div class="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200">
                  <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500" id="sexual-bar">
                    Sex
                  </div>
                </div>
                <div class="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200">
                  <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500" id="psych-bar">
                    Psychology
                  </div>
                </div>
              </div>
            </div>
{/* progress bars above */}
          </div>
        </div>
      </>
    )
  }
}

export default AnimeCard