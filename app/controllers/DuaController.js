app.controller('DuaController', function(dataFactory,$scope,$http,$routeParams){
  $scope.data = [];
  $scope.libraryTemp = {};
  var page = $routeParams.id;
  console.log(page);
  getResultsPage(page);
  function getResultsPage(page) {
        dataFactory.httpRequest('http://selintasolahraga.com/?json=get_post&post_id='+page).then(function(data) {
        $scope.data = data;

        $scope.myText = data.post.content;
          console.log($scope.myText);
        });
      
  }

 
   
})