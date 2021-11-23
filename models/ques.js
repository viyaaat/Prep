const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const quesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Ques = mongoose.model('Ques', quesSchema);
module.exports = Ques;