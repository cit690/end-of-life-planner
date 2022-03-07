import mongoose from 'mongoose'

const willSchema = new mongoose.Schema({
  content: String,
})

const planSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  location: String,
  nextOfKin: String,
  powerOfAttorney: String,
  dnr: {
   type: Boolean,
   default: false,
  },
  will: [willSchema],

})

const Plan = mongoose.model('Plan', planSchema)

export {
  Plan
}
