var app = angular.module("nutellaApp", ["ngRoute"]);
console.log("hey from myapp.js");
// Configure the Routes

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
   .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
  // Pages
  .when("/ingredients", {templateUrl: "views/ingredients.html", controller: "PageCtrl"})
  .when("/nutrition", {templateUrl: "views/nutrition.html", controller: "PageCtrl"})
  .when("/processing", {templateUrl: "views/processing.html", controller: "PageCtrl"})
  .when("/production", {templateUrl: "views/production.html", controller: "PageCtrl"})
  .when("/recipes", {templateUrl: "views/recipes.html", controller: "PageCtrl"})
  .when("/storage", {templateUrl: "views/storage.html", controller: "PageCtrl"})
// else 404
  .otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"});
}]);

// Controls the Pages

app.controller("PageCtrl", function( $scope, $location, $http ){
  console.log("Page Controller having no control issues");
});
