describe('RegistrationController', function() {
  var $controller,
    RegistrationController,
    UserService;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('public'));

  beforeEach(
    inject(function($injector) {
      $controller = $injector.get('$controller');
      UserService = $injector.get('UserService');
      RegistrationController = $controller('RegistrationController', {
        UserService: UserService
      });
    }));

  it('should be defined', function() {
    expect(RegistrationController).toBeDefined();
  });
});
