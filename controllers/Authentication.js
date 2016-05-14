angular
.module('app').run(function ($rootScope, $location, AuthenticationService) {

  // enumerate routes that don't need authentication
  var routesThatDontRequireAuth = ['/login'];

  // check if current location matches route
  var routeClean = function (route) {
    return _.find(routesThatDontRequireAuth,
      function (noAuthRoute) {
        return _.str.startsWith(route, noAuthRoute);
      });
  };

  var isLoggedIn = function () {
    return true;
  };

  $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    // if route requires auth and user is not logged in
    if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
      // redirect back to login
      $location.path('/');
    }
  });
});
