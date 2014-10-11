var app = angular.module('phoneBookApp');

app.controller('phoneBookCtrl', function($scope, phoneBookService, $location, $route){
		
	$scope.records = phoneBookService.getData();

	$scope.name;

	$scope.submit = function(name) {
		//if (name) - need if statement that sees if that value is already there
		phoneBookService.submitData(name, $scope.person);

	}

});