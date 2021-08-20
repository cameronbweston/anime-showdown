import {Review} from '../models/review.js'
import {Anime } from '../models/anime.js'
import {Profile} from '../models/profile.js'

export {
    create,
    update,
    index,
    deleteReview as delete
    
}


function create(req, res) {
    Anime.findById(req.params.id)
    .then((anime)=>{
        Review.create(req.body)
        .then((review)=>{
            review.anime.push(review)
            review.populate('comment')
            review.save()
            .then(()=>{
                res.json(review)
            })
        })
        
    })
    
}
function deleteReview(req, res) {
    Profile.findById(req.user.profile)
        .then((profile)=>{
            profile.reviews.remove(req.params.id)
            profile.save()
            Review.findByIdAndDelete(req.params.id)
                .then((review)=>{
                res.json(review)
        })
    })
}

function update(req, res) {
    Review.findByIdAndUpdate(req.body)
    .populate('comment')
    .then((review)=>{
        res.json(review)

    })
}

function index(req, res) {
    Review.findById(req.params.id)
    .populate('psychologicalRating')
    .populate('goreRating')
    .populate('sexualContentRating')
    .populate('userRating')
    .populate('comment')
    .then(review=>{
        res.json(review)
    })
}