const express = require('express')
const router = express.Router()
const Novel = require('../models/novels')

router.get('/novels/new', function (req, res) {
  res.render('novels/new')
})

router.post('/novels', function (req, res) {
  const novel = new Novel()
  novel.name = req.body.title
  novel.author = req.body.author
  novel.pub = req.body.pub
  novel.imgurl = req.body.imagelink
  novel.buyurl = req.body.buylink
  novel.characters.mainFemale = req.body.female_main
  novel.characters.supportFemale = req.body.female_support
  novel.characters.male = req.body.male

  novel.save()
  .then(function (novel) {
    res.json(novel)
  })
}).catch(function (validationError) {
    res.render('novels/new', {
      novel: novel,
      valdiationError: validationError
    })
})

module.exports = router
