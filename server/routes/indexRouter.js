const express = require('express'),
      router = express.Router();

router.post('/applicant', function(req, res, next){
    console.log('a');
});


module.exports = router;
