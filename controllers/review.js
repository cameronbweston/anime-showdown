import {Review} from '../models/review.js'
import {Anime } from '../models/anime.js'

export {
    create,
    update,
    index,
    deleteReview as delete
    
}

function deleteReview(req, res) {
    Anime.findByIdAndDelete(req.body)
    .then((review)=>{
        res.json(review)
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
                res.redirect(`/anime/${anime.id}`)
            })
        })
    })
}

function update(req, res) {
    Review.findByIdAndUpdate(req.params.id)
    .populate('reviews')
    .then((review)=>{

    })
}

function index(req, res) {
    Review.findById(req.params.id)
    .populate('reviews')
    .then(review=>{
        res.json(review)
    })
}