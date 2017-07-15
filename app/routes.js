var app =  angular.module('main-App',['ngRoute','angularUtils.directives.dirPagination','ngSanitize']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
		.when('/', {
                templateUrl: 'templates/index.html',
                controller: 'ItemController'
		})
		.when("/detail/:id", {
			templateUrl : "templates/detail.html",
			controller: 'DuaController'
		});
}]);