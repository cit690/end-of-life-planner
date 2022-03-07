import mongoose from 'mongoose'

const planSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
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

const Plan = mongoose.model('Plan', planSchema)

export {
  Plan
}
