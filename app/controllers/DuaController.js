app.controller('DuaController', function(dataFactory,$scope,$http,$routeParams){
  $scope.data = {};
  $scope.libraryTemp = {};
    $scope.totalItemsTemp = {};
  $scope.attachment = {};
  var page = $routeParams.id;
   console.log(page);

  $scope.totalItems = 1;
  $scope.pageChanged = function(newPage) {
    getResultsPage(newPage);
  };

  getResultsPage(1);
  var page = $routeParams.id;
  console.log(page);
  getResultsPage(page);
  function getResultsPage(page) {
        dataFactory.httpRequest('http://selintasolahraga.com/?json=get_post&post_id='+page).then(function(data) {
        $scope.data = data.post;
		console.log($scope.data)
        $scope.myText = data.post.content;
          //console.log($scope.myText);
        });
      
  }

 
   
})