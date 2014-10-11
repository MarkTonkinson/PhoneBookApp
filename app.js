var app = angular.module('phoneBookApp', ['ngRoute', 'firebase']);

//add the carousel to this app at some point

app.config(['$routeProvider', function($routeProvider){
$routeProvider
.when('/login', {
	templateUrl: 'loginview.html',
	controller: 'loginCtrl'

}).when('/phonebook', {
	templateUrl: 'phonebookview.html',
	controller: 'phoneBookCtrl'

}).when('/edit/:name', {	
	templateUrl:'editview.html',
	controller: 'editViewCtrl'
}).otherwise({
	redirectTo: '/login'
})


}]);