angular.module('contactsApp', [])
// .factory('contactService',function($http){
//     var contactFact=[];
   
//     contactFact.getList=function(){
//         return $http
//         .get('https://my-json-server.typicode.com/aniruddhakulkarni8/contact-management/db')
        
//     }
//     return contactFact;
// })
    .controller('contactsController', ['$scope',
    'contactService',
        function ($scope,contactService) {
            var ctrl = this;
            ctrl.name = 'my name';

            ctrl.getContacts = function () {
                 contactService.getList()
                 .then(function(response){
                     $scope.contactList = response.data;
                 },function(err){
                     console.log(err);
                 })
            }
            ctrl.getContacts();
        }])

