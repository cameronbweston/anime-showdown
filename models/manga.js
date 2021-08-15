import mongoose from 'mongoose'

export {
  Manga
}

const mangaSchema = new mongoose.Schema(
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

const Manga = mongoose.model('Manga', mangaSchema)
