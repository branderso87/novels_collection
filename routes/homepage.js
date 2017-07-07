const express = require('express')
const router = express.Router()
const Novel = require('../models/novels')

router.get('/', function (req, res) {
  Novel.find()
  .sort('publication_date')
  .then(function (novels) {
    res.render('index', {
      novels: novels
    })
  })
})

module.exports = router
