app.controller('NewForumCtrl', ['$scope', 'ForumsFactory', function($scope, ForumsFactory) {
  $scope.title = 'Create New Forum';

  $scope.newForum = {};

  $scope.addForum = function(newForum) {
    $scope.newForum.creatorID = "simplelogin:1"; //Update this to be the actual user ID
    $scope.newForum.createdAt = JSON.stringify(new Date().toString());

    // Convert start to the user input date and time as a string
    $scope.newForum.start = newForum.startDate.toString().slice(0,16).concat( newForum.start.toString().slice(16,33) );
    delete $scope.newForum.startDate;

    // Convert end to the user input date and time as a string
    $scope.newForum.end = newForum.endDate.toString().slice(0,16).concat( newForum.end.toString().slice(16,33) );
    delete $scope.newForum.endDate;

    // Save the forum to Firebase
    ForumsFactory.saveForum(newForum).then(function(ref) {
      var id = ref.key();
      // $scope.forum = ForumsFactory.getForum(id);
      console.log("added a new forum with id " + id);
    }).catch(function(err) {
      console.error(err);
    });
  }
}]);

