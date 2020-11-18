const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use(function (req, res, next) {
  res.locals.query = req.query

  next()
})

router.post('/apply/partnership', function (req, res) {
  if (req.body['is-partnership'] === 'yes') {
    return res.redirect('/apply/partnership-type')
  } else {
    req.session.data.tasks.partnership = 'completed'
    return res.redirect('/apply/tasks')
  }
})

module.exports = router
