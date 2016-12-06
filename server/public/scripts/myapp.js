var app = angular.module("nutellaApp", ["ngRoute"]);
console.log("hey from myapp.js");
// Configure the Routes

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
   .when("/index", {templateUrl: "views/index.html", controller: "PageCtrl"})
  // Pages
   .when("/home", {templateUrl: "views/home.html", controller: "PageCtrl"})
   .when ("/aboutTracey", {templateUrl: "views/aboutTracey.html", controller: "PageCtrl"})
   .when ("/portfolio", {templateUrl: "views/portfolio.html", controller: "PageCtrl"})
   .when ("/blog", {templateUrl: "views/blog", controller: "PageCtrl"})
   .when("/all_about_nutella", {templateUrl: "views/all_about_nutella.html", controller: "PageCtrl"})
   .when("/recipes", {templateUrl: "views/recipes", controller: "PageCtrl"})
// else 404
  .otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"});
}]);

// Controls the Pages

app.controller("PageCtrl", function( $scope, $location, $http ){
  // $scope.recipe = {title:"Nutella Waffles", ingredients:""};
  console.log("Page Controller having no control issues");
});
