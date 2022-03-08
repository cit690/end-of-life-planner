import mongoose from 'mongoose'


const dispositionSchema = new mongoose.Schema({
  method: String,
  embalm: Boolean,
})

const Disposition = mongoose.model("Disposition", dispositionSchema)

export {
  Disposition
}