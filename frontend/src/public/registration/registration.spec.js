describe('RegistrationController', function() {
  var $controller,
    $scope,
    $location,
    RegistrationController,
    UserService;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('public'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$location_, _UserService_) {
    $controller = _$controller_;
    UserService = _UserService_;

    $scope = _$rootScope_.$new();
    $location = _$location_;

    RegistrationController = $controller('RegistrationController', {
      UserService: UserService,
      $location: $location,
      $scope: $scope
    });
  }));

  it('should be defined with UserService', function() {
    expect(RegistrationController).toBeDefined();
    expect(UserService).toBeDefined();
  });
});
