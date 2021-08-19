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
    Anime.findById(req.params.body)
        .then((anime)=>{
            Review.create(req.body)
                .then((review)=>{
                    anime.review.push(review)
                })

        })

}

function update(req, res) {
    Review.findByIdAndUpdate(req.body)
    .populate('reviews')
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