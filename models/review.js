import mongoose from 'mongoose'

export {
  Review
}

const reviewSchema = new mongoose.Schema(
  {
    goreRating: Number,
    sexualContentRating: Number,
    psychologicalRating: Number,
    userRating: Number,
    comment: String
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)
