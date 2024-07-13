import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    title: String,
    cards: [String],
});

const FlashcardModel  = mongoose.model('Flashcard', FlashcardSchema);

export default FlashcardModel ;