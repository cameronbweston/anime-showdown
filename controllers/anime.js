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

    req.body.collected_by = req.user.profile
    // find the profile of the logged in user
    Profile.findById(req.user.profile)
    .then(profile => {
      console.log(`profile: ${profile}`)
      // check to see if the media exists in the database
      Anime.findOne({mal_id: req.body.mal_id})
      .then(anime =>  {
        // if a matching media is found
        if (anime) {
          // add the user's profile id to the media.collected_by
          anime.collected_by.push(req.user.profile)
          anime.save()
          .then(anime => {
            // push the updated media document into the user's profile
            profile.animeCollection.push(anime._id)
            profile.save()
            // populate to keep userProfile accurate in <App> state
            profile.populate('animeCollection').execPopulate()
            .then((profile) => {
              // sending back the freshly updated, fully populated profile document
              res.json(profile)
            })
          })
        } else {
          //create and add a new one
          Anime.create(req.body)
          .then(anime => {
            profile.media.push(anime._id)
            profile.save()
            profile.populate('animeCollection').execPopulate()
            .then((profile) => {
              // return the freshly update, fully populated profile document
              res.json(profile)
            })
          })
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
}

function removeFromUserCollection(req, res) {
  // finding the media doc
  Anime.findOne({ mal_id: req.params.id })
  .then(anime => {
    // removing the user's profile _id from the media doc's collected_by array
    anime.collected_by.remove({ _id: req.user.profile })
    anime.save()
    .then(() => {
      // find the user's profile
      Profile.findById(req.user.profile)
      .then(profile => {
        // find the index of the media doc in the user's profile's media array
        let animeIdx = profile.animeCollection.findIndex(anime => anime.mal_id === req.body.mal_id)
        // then remove it
        profile.animeCollection.splice(animeIdx, 1)
        profile.save()
        // repopulate before returning the updated document to the front end
        profile.populate('animeCollection').execPopulate()
        .then(()=> res.json(profile))
      })
    })
  })
}
