var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.items = {};
	$scope.results = {};
    $scope.assetName = '';
    $scope.selectedApi = '';
    $scope.totalCount = 0;
    $scope.searchWeather = function(){
    	var searchTerm = $scope.assetName;
    	var selectedApi = $scope.selectedApi;
    	console.log(selectedApi +' --- '+ searchTerm);
    	if (selectedApi=='openweather') {
    		$scope.results = {};
			$http.get("http://api.openweathermap.org/data/2.5/find?q="+searchTerm+"&type=like&sort=population&cnt=30&units=metric&APPID=73136fa514890c15bc4534e7b8a1c0c4")
			.then(function(response) {
			  //$scope.myWelcome = response.data;

			  $scope.items = response.data.list;
			  $scope.totalCount = response.data.count;

			  console.log($scope.items)
			});
		}
		else if (selectedApi=='yahoo'){
			$scope.items = {};
			$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+searchTerm+"%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
			.then(function(response) {
			  //$scope.myWelcome = response.data;
			  //.results.channel.item.condition
			  $scope.results = response.data.query;

			  $scope.totalCount = response.data.query.count;

			  console.log($scope.results.results.channel.description)
			});
		}

	};
});