
    app.controller('contactsController', 
        function ($scope,
                contactService,
                $state) {
            var ctrl = this;
            ctrl.name = 'my name';
            $scope.contactData;
            $scope.more = false;
            $scope.getContacts = function () {
                 contactService.getList()
                 .then(function(response){
                     $scope.contactList = response.data.data;
                     console.log($scope.contactList);
                 },function(err){
                     console.log(err);
                 })
            }
            $scope.getContacts();

            $scope.goTo=function(componentState){
                switch (componentState) {
                    case 'list':
                        $state.go('list')
                        break;
                    case 'contactForm':
                        $state.go('contact')
                        break;
                
                    default:
                            $state.go('list')
                        break;
                }
                
            }

            $scope.saveContact=function(data){
                console.log(data);
                $scope.goTo('list');
                
            }
        })

