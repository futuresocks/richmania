const express = require('express');
const router = new express.Router();

router.use('/api', require('./api'));

router.get('/', function(req, res){
  res.sendFile(__dirname + '../client/index.html');
})

module.exports = router;
