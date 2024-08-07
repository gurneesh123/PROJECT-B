// models/User.js
import mongoose from 'mongoose';

// Define the schema for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

export default User;
