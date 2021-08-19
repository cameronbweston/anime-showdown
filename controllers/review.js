import {Review} from '../models/review.js'
import {Anime } from '../models/anime.js'
import {Profile} from '../models/profile.js'

export {
    create,
    update,
    index,
    deleteReview as delete
    
}

function deleteReview(req, res) {
    Profile.findById(req.user.profile)
        .then((profile)=>{
            profile.reviews.remove(req.params.id)
            profile.save()
            Anime.findByIdAndDelete(req.params.id)
                .then((review)=>{
                res.json(review)
        })
    })
}

function create(req, res) {
    Review.create(req.body)
    .then(review=>{
        Anime.findById(req.params.id)
        .then(anime =>{
            anime.review.push(review._id)
            anime.save()
            .then(()=>{
                res.json(review)
            })
        })
    })
}

function update(req, res) {
    Review.findByIdAndUpdate(req.params.id)
    .populate('reviews')
    .then((review)=>{
        res.json(review)

    })
}

function index(req, res) {

    Review.findById(req.params.id)
    .populate('reviews')
    .then(review=>{
        res.json(review)
    })
}