var app = angular.module('phoneBookApp');

app.service('phoneBookService', function($firebase){
	var firebaseUrl = 'https://mtphonebook.firebaseio.com'
	
	this.submitData = function(name, data){
		var ref = new Firebase(firebaseUrl + '/records/' + name);
		var sync = $firebase(ref);
		sync.$set(data); //set overwrites
	}

	this.getData = function(){
		return $firebase(new Firebase(firebaseUrl + '/records')).$asArray();
	}
	this.getIndividualData = function(name) {
		return $firebase(new Firebase(firebaseUrl + '/records' + name)).$asObject();
	}
	

})