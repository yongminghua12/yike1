/*
* @Author: Administrator
* @Date:   2017-07-11 19:29:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-18 20:00:06
*/

'use strict';
angular.module("Controllers",[]).controller("navController",["$scope",function($scope){	

	$scope.navs = [
		{link:"#/today",icon:"icon-home",text:"今日一刻"},
		{link:"#/older",icon:"icon-file-empty",text:"往期内容"},
		{link:"#/author",icon:"icon-pencil",text:"热门作者"},
		{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
		{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
		{link:"#/settings",icon:"icon-cog",text:"设置"}
	];
}])
.controller("todayContr",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	console.log("少时诵诗书");
	var today = $filter("date")(new Date,"yyyy-MM-dd");
	$scope.time = today;
	$rootScope.loaded = false;
	$http({
		url:"./api/today.php",
		method:"get",
		params:{today:today}
	}).then(function(result){
		$rootScope.loaded = true;
		$scope.time = result.data.date;
		$scope.posts = result.data.posts;
	});
}])
.controller("olderContr",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	console.log("实打实的法定");
	$rootScope.loaded = false;
	$http({
		url:"./api/older.php",
		method:"get"
	}).then(function(result){
		$rootScope.loaded = true;
		$scope.time = result.data.date;
		$scope.posts = result.data.posts;
	})
}])
.controller("authorContr",["$scope","$http",function($scope,$http){
	console.log("三生三世十里桃花");
	$http({
		url:"./api/author.php",
		method:"get"	
	}).when(function(result){
		$scope.name = result.authors.name;
		$scope.alt = result.author.alt;
	})

}]);