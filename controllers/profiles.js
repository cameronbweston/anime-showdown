import { Profile } from "../models/profile.js"

export {
  userProfile,
  getProfileDetails,
  edit,
  index,
  friend,
  unfriend
}

function edit(req, res) {
  console.log(req.body)
  console.log(req.user)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.name = req.body.name
    profile.email = req.body.email
    profile.save()
    profile.populate('animeCollection').populate('friends').execPopulate()
    .then(()=> {
      res.json(profile)
    })
  })
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('animeCollection')
  .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}

function getProfileDetails(req, res) {
  Profile.findById(req.params.id)
  .populate('animeCollection')
  .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}

function friend(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    // push the friend's _id into the user's friends array
    profile.friends.push(req.params.id)
    // save the document
    profile.save()
    // populate the subdocs
    profile.populate('animeCollection').populate('friends').execPopulate()
    .then(()=> {
      res.json(profile)
    })
  })
}

function unfriend(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.remove({ _id: req.params.id })
    profile.save()
    profile.populate('animeCollection').populate('friends').execPopulate()
    .then(()=> {
      res.json(profile)
    })
  })
}

function index(req, res) {
  Profile.find({})
  .populate('animeCollection')
  .populate('friends')
  .then(profiles => {
    console.log(profiles)
    res.json(profiles)
  })
}
