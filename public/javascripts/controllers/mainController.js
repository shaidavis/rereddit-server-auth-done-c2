app.controller('MainCtrl', ['$scope', 'posts', 'auth', function($scope, posts, auth){
  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if ($scope.title === '') { return; }

    posts.create({ 
      title: $scope.title, 
      link: $scope.link
    });

    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementUpvotes = function(item) {
    posts.upvote(item);
  }

  $scope.isLoggedIn = auth.isLoggedIn;

}]);