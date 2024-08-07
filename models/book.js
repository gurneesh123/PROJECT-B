// models/book.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pages: { type: Number, required: true },
    fiction: { type: Boolean, required: true },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
