import mongoose from 'mongoose'

export {
  Anime
}

const animeSchema = new mongoose.Schema(
  {
    title: String,
    releaseYear: Date,
    coverImg: String,
    synopsis: String,
    review: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}],
  },
  {
    timestamps: true,
  }
)

const Anime = mongoose.model('Anime', animeSchema)
