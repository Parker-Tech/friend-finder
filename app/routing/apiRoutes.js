var friends = require("../data/friends");

module.exports = function(app){
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  
  app.post('/api/friends', function(req, res) {
    const user = req.body;

    var scoreArr = user.score.map(function(x) { 
      return parseInt(x, 10); 
    });
    
    console.log(scoreArr);
  });
};
