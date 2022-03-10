import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
    default: Date.now(),
    required: true,
  },
  location: String,
  nextOfKin: String,
  powerOfAttorney: String,
  dnr: {
   type: Boolean,
   default: false,
  },
  wills: [willSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  finalDispo: [{ type: Schema.Types.ObjectId, ref: "Disposition" }],
})

const Plan = mongoose.model('Plan', planSchema)

export {
  Plan
}
