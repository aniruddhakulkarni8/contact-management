
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('list',{
        url:'/',
        templateUrl:'./templates/list.html'
    })
    .state('contact',{
        url:'/contact',
        templateUrl:'./templates/addUpdate.html'
    })
})