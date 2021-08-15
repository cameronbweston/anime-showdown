import axios from 'axios'

export {
  searchAnime,
  getRandomShowsForGameStart,
  addToUserCollection
}

const BASE_URL = 'https://api.jikan.moe/v3/'
// EXAMPLE QUERY:  /search/anime?q=Boku&page=1&genre=12&genre_exclude=0

function searchAnime(req, res) {

  axios.get(`BASE_URL/search/anime?1=${req.params.searchTitle}`, {
    method: 'get',
  }).then(result => {
    console.log(result.data); 
    res.json(result.data)
  })
  .catch((err) => console.log(err.message));
}

function getRandomShowsForGameStart(req, res) {
  //const genre1 = req.body.genre1
  //const genre2 = req.body.genre2
  //const genre3 = req.body.genre3
  
}

function addToUserCollection(req, res) {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}

