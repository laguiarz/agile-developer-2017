const express = require('express');
const router = express.Router();
const issuesStore = require('../models/issue.store');


router.get('/', function(req, res) {
  const openIssues        = issuesStore.getAllOpen()
  const openIssuesCount   = openIssues.length;
  const highSeverityCount = openIssues.filter( issue => issue.severity ==='High').length;

  res.render('dashboard', {
    openIssuesCount: openIssuesCount,
    highSeverityPercentage: highSeverityCount/openIssuesCount
  });
});

module.exports = router;
