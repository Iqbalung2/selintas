
app.controller("MyCtrl", function(dataFactory,$scope,  $http, $routeParams) {
 var page = $routeParams.id;
 console.log(page);
$http.get("http://selintasolahraga.com/?json=get_post&post_id"+page).then(function (response) {
    $scope.myData = response.data.post.content;
	console.log( $scope.myData);
	$scope.myText =  $scope.myData;
   
});
});