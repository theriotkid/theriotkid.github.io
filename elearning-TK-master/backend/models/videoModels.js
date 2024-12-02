const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    link: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Video', videoSchema, 'video')