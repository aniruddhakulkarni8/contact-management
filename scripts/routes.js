angular.module('contactsApp',['ui.router'])
.config(function($stateProvider, $urlProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('list',{
        url:'/list',
        templateUrl:'./templates/list.html'
    })
    .state('add',{
        url:'/add',
        template:'add'
    })
})