const mongoose = require('mongoose')

const novelsSchema = new mongoose.Schema({
  name: String,
  author: String,
  publication_date: Number,
  characters: [{
    female_main: String,
    female_support: [String],
    male: [String]
  }]
})

const Novel = mongoose.model('Novel', novelsSchema)

module.export = Novel
