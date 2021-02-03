import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, default: 0 },
  photos: [{ type: String }],
  comments: [{ user: { type: mongoose.Types.ObjectId, ref: "User" }, text: { type: String, required: true } }],
  city: { type: String, required: true }
})

const RestaurantModel = mongoose.model('restaurant', restaurantSchema)
export default RestaurantModel
