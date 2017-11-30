const express = require('express');
const router = express.Router();
const issuesStore = require('../models/issue.store');


router.get('/', function(req, res) {
  const openIssues          = issuesStore.getAllOpen()
  const openIssuesCount     = openIssues.length;
  const highSeverityCount   = openIssues.filter( issue => issue.severity ==='High').length;
  const lowSeverityCount    = openIssues.filter( issue => issue.severity ==='Low').length;
  const mediumSeverityCount = openIssues.filter( issue => issue.severity ==='Medium').length;

  function percentage(count, total) {
    if (total > 0) {
      return count / total;
    }
  
    return 0;
  }

  res.render('dashboard', {
    openIssuesCount:          openIssuesCount,
    highSeverityPercentage:   percentage(highSeverityCount,openIssuesCount),
    lowSeverityPercentage:    percentage(lowSeverityCount,openIssuesCount),
    mediumSeverityPercentage: percentage(mediumSeverityCount,openIssuesCount)
  });
});

module.exports = router;
