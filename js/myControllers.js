
app.controller('myController1', function($scope, $location, myService){
            
    init();

    function init() {
        $scope.model = myService.getJsonData();
    }
    
});

app.controller('myController2', function ($scope, $routeParams, myService){
    $scope.model = {};
 
    init();

    function init() {
        //Grab modelID off of the route        
        var modelID = ($routeParams.modelID) ? parseInt($routeParams.modelID) : 0;
        if (modelID > 0) {
            $scope.model = myService.getCustomer(modelID);
        }
    }      
});

app.directive('suchHref', function ($location) {
  return{
    restrict: 'A',
    link: function (scope, element, attr) {
      element.on('click', function(){
        $location.path(attr.suchHref)
        scope.$apply();
      });
    }
  }
});