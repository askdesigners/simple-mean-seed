app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/login', {
        templateUrl: '/partials/enter.tpl.html',
        controller: 'LoginCtrl'
    })
    .when('/unsecured', {
        templateUrl: '/partials/unsecure.tpl.html',
        controller: 'UnsecureCtrl'
    })
    .when('/secure', {
        templateUrl: '/partials/secure.tpl.html',
        controller: 'SecureCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    }); 
}]);