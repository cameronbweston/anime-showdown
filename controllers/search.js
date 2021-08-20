import Anime from '../models/anime.js'
import axios from 'axios';

export{
    search
}

function search(req, res) {
    axios.get(`${BASE_URL}search/anime?q=${req.params.searchTitle}`)
    .then(result => {
      console.log(result.data); 
      res.json(result.data)
    })
    .catch((err) => console.log(err.message));
  }