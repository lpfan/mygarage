describe('Users Service', function() {
  var UserService,
    $httpBackendMock;

  beforeEach(function() {
    module('public');

    inject(function($injector) {
      UserService = $injector.get('UserService');
      $httpBackendMock = $injector.get('$httpBackend');
    });
  });

  it('should exist', function() {
    expect(UserService).toBeDefined();
  });

  describe('.registerUser()', function() {
    it('should exist', function() {
      expect(UserService.registerUser).toBeDefined();
    });
    it('should register user if username and email provided', function() {
      $httpBackendMock.expectPOST('/api/users').respond({
        message: 'User registered',
        status: 'success'
      });
      UserService.registerUser().then(function(response) {
        expect(response.status).toEqual('success');
        expect(response.message).toEqual('User registered');
      });
      $httpBackendMock.flush();
    });
    it('should raise an error if username or email are not provided', function() {
      $httpBackendMock.expectPOST('/api/users').respond({
        message: 'Username and email are required',
        status: 'error'
      });
      UserService.registerUser(null).then(function(response) {
        expect(response.status).toEqual('error');
        expect(response.message).toEqual('Username and email are required');
      });
      $httpBackendMock.flush();
    });
  });
});
