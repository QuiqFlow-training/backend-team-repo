import {
  jest,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} from '@jest/globals';
import Admin from './Admin.js';
import User from './User.js';

describe('Admin Class', () => {
  let adminDetails;

  beforeEach(() => {
    adminDetails = { name: 'Admin User', email: 'admin@example.com' };
  });

  describe('Constructor and Inheritance', () => {
    it('should correctly set the role to "admin"', () => {
      const admin = new Admin(adminDetails);
      expect(admin.role).toBe('admin');
    });

    it('should inherit properties like name and email from the User class', () => {
      const admin = new Admin(adminDetails);

      expect(admin.name).toBe('Admin User');
      expect(admin.email).toBe('admin@example.com');
      expect(admin.isLoggedIn).toBe(false);
    });

    it('should be an instance of both Admin and User', () => {
      const admin = new Admin(adminDetails);
      expect(admin instanceof Admin).toBe(true);
      expect(admin instanceof User).toBe(true);
    });

    it('should inherit methods like login from the User class', () => {
      const admin = new Admin(adminDetails);
      admin.login();
      expect(admin.isLoggedIn).toBe(true);
    });
  });

  describe('.deleteUser() method', () => {
    let admin;
    let userToDelete;
    let consoleSpy;

    beforeEach(() => {
      admin = new Admin(adminDetails);
      userToDelete = new User({ name: 'Test User', email: 'test@example.com' });

      consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
      // It's a best practice to restore mocks after each test.
      consoleSpy.mockRestore();
    });

    it('should log a message to the console with the correct admin and user names', () => {
      // Call the method we want to test
      admin.deleteUser(userToDelete);

      // Assert that our spy was called
      expect(consoleSpy).toHaveBeenCalledTimes(1);

      // Assert that it was called with the correct message
      expect(consoleSpy).toHaveBeenCalledWith(
        'Admin User deleted user Test User'
      );
    });
  });
});
