import Anime from '../models/anime.js'
import axios from 'axios';

export{
    search
}

const BASE_URL = 'https://api.jikan.moe/v3/'

function search(req, res) {
    axios.get(`${BASE_URL}search/anime?q=${req.params.query}`)
    .then(result => {
      console.log(result.data); 
      res.json(result.data)
    })
    .catch((err) => console.log(err.message));
  }