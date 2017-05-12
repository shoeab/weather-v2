var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.items = {};
	$scope.results = {};
    $scope.assetName = '';
    $scope.selectedApi = '';
    $scope.totalCount = 0;
    $scope.searchWeather = function(){
    	var searchTerm = $scope.assetName;
    	//var selectedApi = $scope.selectedApi;
    	// console.log(selectedApi +' --- '+ searchTerm);
    	console.log(' --- '+ searchTerm);
    	

    	$http.post('/get-data', {city: $scope.assetName})
		.success(function(data) {
			console.log(data)
			//return data;
			$scope.items = data.list;
			  $scope.totalCount = data.count;

			  console.log($scope.items)
		})
    	

	};
});