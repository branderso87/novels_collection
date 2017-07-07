const mongoose = require('mongoose')

const novelsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  author: {type: String, required: true},
  publication_date: Number,
  img_url: {type: String, required: true},
  buy_url: String,
  characters: [{
    female_main: {type: String, required: true},
    female_support: [String],
    male: [String]
  }]
})

const Novel = mongoose.model('Novel', novelsSchema)

module.exports = Novel
