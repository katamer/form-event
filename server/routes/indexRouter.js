const express = require('express'),
      router = express.Router(),
      applicant = require('../services/applicant.js'),
      handleError = require('../middleware/handleError.js');

router.post('/applicant', handleError(applicant.add.bind(applicant)));

module.exports = router;
