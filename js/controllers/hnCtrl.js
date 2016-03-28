//Be careful while changing the strings injected here. It can cause problems if we use minification
angular.module('app').controller('hnController',["$scope", "$sce","hnService",
    function ($scope, $sce, hnService) {
        
        $scope.news = [];
        $scope.isLoading = true;
         
        $scope.selectedItem;
            
        hnService.getTop20News(function(news){
            $scope.news = news;
            $scope.isLoading = false;
            $scope.selectedItem = news[0];
        });
      
        $scope.onItemClicked = function(item){
           $scope.selectedItem = item;
           $scope.trurl = $sce.trustAsResourceUrl(item.url);          
         };

    }                                                     
]);