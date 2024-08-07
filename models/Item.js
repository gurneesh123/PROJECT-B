// models/Item.js
import mongoose from 'mongoose';

// Define the schema for individual items
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the item
  image: { type: String, required: true }, // URL of the image
  info: { type: String, required: true },  // Description of the item
  price: { type: String, required: true }, // Price of the item
  category: { type: String, required: true } // Category of the item
});

// Create a model from the schema
const Item = mongoose.model('items', itemSchema,'items');

export default Item;