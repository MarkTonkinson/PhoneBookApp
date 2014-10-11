var app = angular.module('phoneBookApp');

app.controller('editViewCtrl', function($scope, $firebase, $location, $route, phoneBookService){
	
	$scope.editClass = 'edit-top'
	//why does the header div move with it?  is that a bootstrap thing?
	$scope.changeEditClass = function() {
		if ($scope.editClass === 'edit-top') {
			$scope.editClass = 'edit-bottom';
		} else if ($scope.editClass === 'edit-bottom'){
			$scope.editClass = 'edit-top';
		}
	}

	$scope.record = phoneBookService.getIndividualData($location.$$path.replace('/edit',''));
	console.log($scope.record)

	$scope.submitChanges = function(name, data) {//follow the pattern from phone book ctrl
		this.submitData
	}
})