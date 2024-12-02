const mongoose = require('mongoose')

const beritaShema = new mongoose.Schema({
    judul: {
        required: true,
        type: String
    },
    isi: {
        required: true,
        type: String
    },
    foto: {
        required: true,
        type: String
    },
    category:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Berita', beritaShema, 'berita')