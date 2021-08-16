import axios from 'axios'

export {
  searchAnime,
  getRandomShowsForGameStart,
  addToUserCollection
}

const BASE_URL = 'https://api.jikan.moe/v3/'
// EXAMPLE QUERY:  /search/anime?q=Boku&page=1&genre=12&genre_exclude=0

function searchAnime(req, res) {

  axios.get(`BASE_URL/search/anime?q=${req.params.searchTitle}`)
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
    axios.get(`${BASE_URL}search/anime?q=Attack on titan&limit=${limit}`)
    .then(result => {
      //console.log(result.data)
      res.json(result.data)
  })
  .catch((err) => console.log(err.message));
}

function addToUserCollection(req, res) {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}

