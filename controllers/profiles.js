import { Profile } from "../models/profile.js"
//import { Anime } from '../models/anime.js'

export {
  userProfile,
  getProfileDetails,
  index,
  friend,
  unfriend
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('animeCollection')
  // .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}

function getProfileDetails(req, res) {
  Profile.findById(req.params.id)
  .populate('animeCollection')
  // .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}

function friend(req, res) {
  // Find the user's profile
  Profile.findById(req.user.profile)
  .then(profile => {
    // push the friend's _id into the user's friends array
    profile.friends.push(req.params.id)
    // save the document
    profile.save()
    // populate the subdocs
    //profile.populate('media').populate('friends').execPopulate()
    .then(()=> {
      res.json(profile)
    })
  })
}

function unfriend(req, res) {
  Profile.findById(req.user.profile)
  // .populate('media')
  // .populate('friends')
  .then(profile => {
    profile.friends.remove({ _id: req.params.id })
    profile.save()
    .then(()=> {
      res.json(profile)
    })
  })
}

function index(req, res) {
  console.log('made it to controller')

  Profile.find({})
  .populate('animeCollection')
  // .populate('friends')
  .then(profiles => {
    console.log(profiles)
    res.json(profiles)
  })
}
