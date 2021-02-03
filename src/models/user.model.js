import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, default: "" },
  favoriteRestaurants: [{ type: mongoose.Types.ObjectId, ref: 'Restaurant' }]
})

const UserModel = mongoose.model('user', userSchema)
export default UserModel
