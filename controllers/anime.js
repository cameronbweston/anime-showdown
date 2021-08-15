import axios from 'axios'

export {
  searchAnime,
  getRandomShowsForGameStart,
  addToUserCollection
}

const BASE_URL = 'https://api.jikan.moe/v3/'

function searchAnime(req, res) {
  const searchTitle = '';

  axios.get(`BASE_URL/search/anime?1=${searchTitle}`, {
    method: 'get',
  }).then(result => {
    console.log(result.data); 
  })
  .catch((err) => console.log(err.message));
}

function getRandomShowsForGameStart(req, res) {

}

function addToUserCollection(req, res) {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}

