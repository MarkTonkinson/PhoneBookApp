var app = angular.module('phoneBookApp');

app.controller('loginCtrl', function($scope, $location, $route){
	

	

	$scope.login = function(){
		$location.path('/phonebook');
	}
})
