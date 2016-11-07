describe('Users Service', function() {
  var UserService;

  beforeEach(function() {
    module('public');

    inject(function($injector) {
      UserService = $injector.get('UserService');
    });
  });

  it('should exist', function() {
    expect(UserService).toBeDefined();
  });

  describe('.registerUser()', function() {
    it('should exist', function() {
      expect(UserService.registerUser).toBeDefined();
    });
  });
});
