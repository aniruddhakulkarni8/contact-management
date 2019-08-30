
app.factory('contactService',function($http){
    var contactFact=[];
    contactFact.getList=function(){
        return $http
        .get('https://my-json-server.typicode.com/aniruddhakulkarni8/contact-management/db')
    }
    return contactFact;
})