import axios from 'axios'
import { Profile } from '../models/profile.js'
import { Anime } from '../models/anime.js'

export {
  searchAnime,
  getRandomShowsForGameStart,
  addToUserCollection,
  removeFromUserCollection
}

const BASE_URL = 'https://api.jikan.moe/v3/'
// EXAMPLE QUERY:  /search/anime?q=Boku&page=1&genre=12&genre_exclude=0

function searchAnime(req, res) {
  axios.get(`${BASE_URL}search/anime?q=${req.params.searchTitle}`)
  .then(result => {
    console.log(result.data); 
    res.json(result.data)
  })
  .catch((err) => console.log(err.message));
}

function getRandomShowsForGameStart(req, res) {
  let limit = 10
  //const genre1 = req.body.genre1
  //const genre2 = req.body.genre2
  //const genre3 = req.body.genre3
  //example call: https://api.jikan.moe/v3/search/anime?q=attack on titan
    axios.get(`${BASE_URL}search/anime?q=Attack on titan&page=1&limit=${limit}`)
    .then(result => {
      //console.log(result.data.results)
      res.json(result.data.results)
  })
  .catch((err) => console.log(err.message));
}

function addToUserCollection(req, res) {
    // adding user's profile_id to req.body (for creating a new resource)
    console.log(req.user.profile)
    console.log(req.body)
}

function removeFromUserCollection(req, res) {

}
