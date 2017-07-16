var URL = "http://localhost/selintas_new/";
app.controller('ItemController', function(dataFactory,$scope,$http, $routeParams){
  $scope.data = [];
  $scope.libraryTemp = {};
  $scope.totalItemsTemp = {};
  $scope.attachment = {};
  var page = $routeParams.id;
   console.log(page);

  $scope.totalItems = 0;
  $scope.pageChanged = function(newPage) {
    getResultsPage(newPage);
  };

  getResultsPage(1);
  function getResultsPage(pageNumber) {
      if(! $.isEmptyObject($scope.libraryTemp)){

          dataFactory.httpRequest('http://selintasolahraga.com/?json=get_recent_posts').then(function(data) {
            $scope.data = data.posts;
            $scope.data = data.thumbnail_images;   
          });

          dataFactory.httpRequest('http://selintasolahraga.com/?json=get_recent_posts').then(function(data) {
            $scope.data = data.posts;
            $scope.data = data.thumbnail_images;
          });
      }else{
        dataFactory.httpRequest('http://selintasolahraga.com/?json=get_recent_posts').then(function(data) {
          $scope.data = data.posts;
          
        });
      }
  }

  $scope.searchDB = function(){
      if($scope.searchText.length >= 3){
          if($.isEmptyObject($scope.libraryTemp)){
              $scope.libraryTemp = $scope.data;

              $scope.totalItemsTemp = $scope.totalItems;
              $scope.data = {};
          }
          getResultsPage(1);
      }else{
          if(! $.isEmptyObject($scope.libraryTemp)){
              $scope.data = $scope.libraryTemp ;
              $scope.totalItems = $scope.totalItemsTemp;
              $scope.libraryTemp = {};
          }
      }
  }

  $scope.saveAdd = function(){
    dataFactory.httpRequest(URL + '/api/add.php','POST',{},$scope.form).then(function(data) {
      $scope.data.push(data);
      $(".modal").modal("hide");
    });
  }

  $scope.edit = function(id){
    dataFactory.httpRequest(URL + '/api/edit.php?id='+id).then(function(data) {
    	console.log(data);
      	$scope.form = data;
    });
  }

  $scope.saveEdit = function(){
    dataFactory.httpRequest(URL + '/api/update.php?id='+$scope.form.id,'POST',{},$scope.form).then(function(data) {
      	$(".modal");
        $scope.data = apiModifyTable($scope.data,data.id,data);
    });
  }

  $scope.remove = function(item,index){
    var result = confirm("Are you sure delete this item?");
   	if (result) {
      dataFactory.httpRequest(URL + '/api/delete.php?id='+item.id,'DELETE').then(function(data) {
          $scope.data.splice(index,1);
      });
    }
  }
   
});