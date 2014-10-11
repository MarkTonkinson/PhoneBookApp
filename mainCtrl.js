var app = angular.module('phoneBookApp');

app.controller('mainCtrl', function($scope, $firebase, phoneBookService, $location, $route){







// syncIt.$bindTo($scope, 'records');
// console.log($scope.records);

});
//I may not be able to filter over results without converting it to an array
//also i should probably just make my array an object in scattergories defined by 12 with values that are bout
//then call that object back when it is time to compare rather than the array mess which needs a bit more work