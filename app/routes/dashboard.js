const express = require('express');
const router = express.Router();
const issuesStore = require('../models/issue.store');


router.get('/', function(req, res) {
  const openIssuesCount = issuesStore.getAllOpen().length;
  res.render('dashboard', {
    openIssuesCount: openIssuesCount
  });
});

module.exports = router;
