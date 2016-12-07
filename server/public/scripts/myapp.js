var app = angular.module("nutellaApp", ["ngRoute"]);
console.log("hey from myapp.js");
// Configure the Routes

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
   .when("/home", {templateUrl: "views/home.html", controller: "PageCtrl"})
   // Pages
   .when ("/aboutTracey", {templateUrl: "views/aboutTracey.html", controller: "PageCtrl"})
   .when ("/portfolio", {templateUrl: "views/portfolio.html", controller: "PageCtrl"})
   .when("/all_about_nutella", {templateUrl: "views/all_about_nutella.html", controller: "PageCtrl"})
   .when("/recipes", {templateUrl: "views/recipes.html", controller: "PageCtrl"})
// else 404
  .otherwise("/home", {templateUrl: "views/home.html", controller: "PageCtrl"});
}]);

// Controls the Pages

app.controller("PageCtrl", function( $scope, $location, $http ){
  // $scope.recipe = {title:"Nutella Waffles", ingredients:""};
  console.log("Page Controller having no control issues");
});
