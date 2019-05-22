var friends = require("../data/friends");

module.exports = function(app){
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  


  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    
    var userData = req.body;
    var userScores = userData.scores;
    
    
    var totalDifference;
    
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      console.log(currentFriend.name);
      
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];
        
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      
      if (totalDifference <= bestMatch.friendDifference) {
        
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    
    
    friends.push(userData);
    
    res.json(bestMatch);
  });





  // app.post('/api/friends', function(req, res) {
  //   const user = req.body;
  //   const scoreArr = user.score;
  //   console.log(scoreArr);
  //   let diffTotal;

  //   for(var i = 0; i < scoreArr.length; i++) {
  //     let currentFriend = scoreArr[i];
  //     diffTotal = 0;
  //     console.log(currentFriend.name)
  //   };

  //   console.log(scoreArr);
  // });
};
