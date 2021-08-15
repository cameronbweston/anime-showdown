import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    animeCollection: [{type: mongoose.Schema.Types.ObjectId, ref:"Anime"}],
    mangaCollection: [{type: mongoose.Schema.Types.ObjectId, ref:"Manga"}]
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
