import { Schema, model } from "mongoose";

/* esquema de mongoose */
const ProductSchema = new Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    default: 0.00
  }
})

export default model('Product', ProductSchema)

/* module.exports = model('Product', ProductSchema) */