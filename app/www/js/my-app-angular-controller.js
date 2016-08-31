var templateApp = angular.module("templateApp",[]);

/*templateApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
      when('search', {
        templateUrl: 'search.html',
        controller: 'SearchCtrl'
    }).when('',{
        templateUrl: 'template.html',
		controller: 'MainCtrl'
      });
}]);*/

templateApp.controller("SearchCtrl",function($scope,$http){
	
	
	$root.search = function(val){
		console.log("Search for := "+ val);
	}
});

templateApp.controller("MainCtrl",function($scope,$http){
	
	$scope.pageTitle = "Template App";
	var uiMetadata = getAppUIMetaDataJSON();
	console.log(uiMetadata.leftpanelitems);
	$scope.leftPanelItems = uiMetadata.leftpanelitems;
	
	/*angular.element(document).ready(function(){		
		document.addEventListener('deviceready', function(){
			console.log(">>>>>Device is ready...");
		}, false);
		document.addEventListener('online', function(){
			console.log(">>>>>Device is Online...");
		}, false);
		document.addEventListener('offline', function(){
			console.log(">>>>>Device is Offline...");
		}, false);
	});*/
	$scope.loadView= function(val, jsonObj){
		loadDynamicView(val, jsonObj);
	}
	$scope.search = function(val){
		console.log("Search for := "+ val);
	}
});

function onDeviceReady(){
	console.log(">>>>>Device is ready...");
}
function deviceIsOnline(){
	console.log(">>>>>Device is Online...");
}
function deviceIsOffline(){
	console.log(">>>>>Device is Offline...");
}
function getAppUIMetaDataJSON(){
	var uiMetadata = '{"appname":"Sample App","mainview":{"title":"About","description":"About description","action":"hello.html","actiontype":"link"},"leftpanelitems":[{"itemid":"about123","title":"About","description":"About description","action":"about.html","actiontype":"link"},{"itemid":"info123","title":"Search","description":"Search description","action":"search.html","actiontype":"link"},{"itemid":"info123","title":"Flow 1","description":"Flow description","action":"flow1","actiontype":"json"}]}';
	
	return angular.fromJson(uiMetadata);
}