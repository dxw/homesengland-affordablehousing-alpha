const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use(function (req, res, next) {
  res.locals.query = req.query

  if (!req.session.data.tasks) {
    req.session.data.tasks = {
      checkEligibility: 'not_started',
      partnership: 'not_started',
      homesLocation: 'not_started'
    }
  }

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

router.all('/apply/regions', function (req, res) {
  const regions = req.session.data['homes-locations']
  const tabs = ['total-cost', 'funding', 'timeline']

  const currentTab = req.body.currentTab
  let region = req.body.region
  let nextTab = tabs[tabs.indexOf(currentTab) + 1]

  if (currentTab === tabs[tabs.length - 1]) {
    nextTab = tabs[0]
    region = regions[regions.indexOf(region) + 1]
  }

  // No current tab set so redirect to the first page of the first region
  if (!currentTab) {
    return res.redirect('/apply/' + tabs[0] + '?region=' + regions[0])
  }

  // No more regions left to input data for so redirect to the next page in the journey
  if (region === undefined) {
    req.session.data.tasks.costsFundingTimeline = 'completed'
    return res.redirect('/apply/tasks')
  }

  req.session.data.tasks.costsFundingTimeline = 'in_progress'
  return res.redirect('/apply/' + nextTab + '?region=' + region)
})

module.exports = router
