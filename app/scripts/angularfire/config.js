angular.module('firebase.config', [])
  .constant('FBURL', 'https://talkreserve.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','twitter'])

  .constant('loginRedirectPath', '/login');