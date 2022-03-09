import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  deathPlan: [{ type: Schema.Types.ObjectId, ref: "Disposition" }]
}, {
  timestamps: true
},
)


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
