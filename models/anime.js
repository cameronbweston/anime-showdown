import mongoose from 'mongoose'

export {
  Anime
}

const animeSchema = new mongoose.Schema(
  {
    mal_id: Number,
    title: String,
    rated: String,
    score: Number,
    image_url: String,
    synopsis: String,
    isMovie: Boolean,
    episodes: Number,
    type: String,
    url: String,
    collected_by: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  },
  {
    timestamps: true,
  }
)

const Anime = mongoose.model('Anime', animeSchema)
