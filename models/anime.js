import mongoose from 'mongoose'

export {
  Anime
}

const animeSchema = new mongoose.Schema(
  {
    mal_id: Number,
    title: String,
    rating: String,
    score: Number,
    coverImg: String,
    synopsis: String,
    isMovie: Boolean,
    collected_by: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  },
  {
    timestamps: true,
  }
)

const Anime = mongoose.model('Anime', animeSchema)
