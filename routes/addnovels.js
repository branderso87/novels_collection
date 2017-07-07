const express = require('express')
const router = express.Router()
const Novel = require('../models/novels')

router.get('/novels/new', function (req, res) {
  res.render ('addnovels')
})



module.exports = router
