import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  avatar: String,
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  location: String,
  nextOfKin: String,
  powerOfAttorney: String,
  dnr: {
   type: Boolean,
   default: false,
  }

})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
