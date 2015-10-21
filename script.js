var app = angular.module('ui.bootstrap.demo', ['ui.router', 'ngAnimate', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

   $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'HomeCtrl'})
});

app.controller('AccordionDemoCtrl', function ($scope) {

  $scope.oneAtATime = true;

  $scope.subjects = [
    {
      name: "Climate Change",
      description: "weather is good",
      url: 'google.com'
    },
    {
      name: "Evolution",
      description: "Bacon ipsum dolor amet boudin shcupim chicken. Frankfurter sket bresaola pancetta cupim ham pork loin. Brisket shank ribeye shankle. Fatback flank chicken picanha ribeye porchetta. Kevin tongue shankle turkey beef bacon, tail andouille.",
      url: 'google.com'
    },
    {
      name: "Vaccines",
      description: "vaccines be good",
      url: 'google.com'
    },
    {
      name: "Faith Healing",
      description: "vaccines be good",
      url: 'google.com'
    },
    {
      name: "GMOs",
      description: "Science is good",
      url: 'google.com'
    }

  ].sort(function(a,b){
    return a.name > b.name;
  });;
});
