/*
* @Author: Administrator
* @Date:   2017-07-11 19:05:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-15 17:04:23
*/

'use strict';
var yike = angular.module("yike",["ngRoute","Controllers"]);
yike.run(["$rootScope",function($rootScope){
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		$rootScope.collapsed = !$rootScope.collapsed;
		var dds = document.querySelectorAll(".navs dd");
		if($rootScope.collapsed){
			for(var i=0;i<dds.length;i++){
				dds[i].style.transform = "translate(0)";
				dds[i].style.transitionDuration = (i+1)*0.15+"s";
			};
		}else{
			for(var i=dds.length-1;i>0;i--){
				dds[i].style.transform = "translate(-100%)";
				dds[i].style.transitionDuration = (dds.length-i)*0.15+"s";
			}
		}
	}
}]);
// 解决锚点乱码bug
yike.config(function($locationProvider){
	$locationProvider.hashPrefix("");
});
// 配置路由
yike.config(["$routeProvider",function($routeProvider){
	// 配置路由具体内容
	$routeProvider.when("/today",{
		templateUrl:"./views/today.html",
		controller:"todayContr"
	}).when("/older",{
		templateUrl:"./views/older.html",
		controller:"olderContr"
	}).when("/author",{
		templateUrl:"./views/author.html",
		controller:"authorContr"
	})
}]);