const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/apply/partnership', function (req, res) {
  if (req.body['is-partnership'] === 'yes') {
    return res.redirect('/apply/partnership-type')
  } else {
    return res.redirect('/apply/why')
  }
})

module.exports = router
