import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  date: {
    type: Date,
    default: new Date()
  },
  name: String
})

export default model('User', userSchema)