var express = require('express');
var friends = require("../data/friends");
var router = express.Router();

  router.get('/api/friends', function(req, res, next) {
    res.json(friends);
  });

  router.post('/api/friends', function(req, res, next) {
    friends.push(req.body);
    res.json(true);
  });

module.exports = router;