import mongoose from 'mongoose'


const dispositionSchema = new mongoose.Schema({
  method: String,
})

const Disposition = mongoose.model("Disposition", dispositionSchema)

export {
  Disposition
}