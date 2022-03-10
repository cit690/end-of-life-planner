import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  deathPlans: [{ type: Schema.Types.ObjectId, ref: "Plan" }]
}, {
  timestamps: true
},
)


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
