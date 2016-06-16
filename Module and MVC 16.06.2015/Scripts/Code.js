/// <reference path="angular.js" />
var x = angular.module("pocmod", []);
x.controller("poctrl", function ($scope) {
    var cources = ["ASP.NEt MVC", "Java", "PHP", "Angular"];
    $scope.CData = cources;
});
x.controller("democtrl", function ($scope) {
    var projects = ["ServicesProject", "RealatorProject", "Other"];
    $scope.PData = projects;
});