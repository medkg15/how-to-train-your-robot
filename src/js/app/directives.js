define(['angular', 'app/angularSetup'], function (angular, angularSetup) {
    angular.module('robotTraining')
        .directive('count', function () {
            return {
                templateUrl: 'count.html'
            };
        });
});