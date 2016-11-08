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

  it('should be defined with UserService', function() {
    expect(RegistrationController).toBeDefined();
    expect(UserService).toBeDefined();
  });
});

describe('Registration process', function() {
  var $scope;
  var $q;
  var deferred;
  var $location;
  var RegistrationController;

  beforeEach(module('public'));

  beforeEach(inject(function($controller, _$rootScope_, _$q_, _$location_, UserService) {
    $location = _$location_;
    spyOn($location, 'path');

    RegistrationController = $controller('RegistrationController', {
      UserService: UserService,
      $location: $location
    });
  }));

  it('should call $location to redirect if success', function() {
    expect(RegistrationController).toBeDefined();
    RegistrationController.submit(null);
    expect($location.path).toHaveBeenCalledWith('/');
  });
});
