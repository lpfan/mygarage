describe('RegistrationController', function() {
  var $controller,
    scope,
    location,
    RegistrationController,
    UserService;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('public'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _$location_, _UserService_) {
    $controller = _$controller_;
    UserService = _UserService_;
    scope = _$rootScope_.$new();
    location = _$location_;

    spyOn(location, 'path');

    RegistrationController = $controller('RegistrationController', {
      UserService: UserService,
      $scope: scope,
      $location: location
    });
  }));

  it('should be defined with UserService', function() {
    expect(RegistrationController).toBeDefined();
    expect(UserService).toBeDefined();
  });
  it('should call $location to redirect to login if success', function() {
    expect(RegistrationController).toBeDefined();
    RegistrationController.submit(null);
    expect(location.path).toHaveBeenCalledWith('/');
  });
});
