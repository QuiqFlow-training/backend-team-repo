
// write ur test cases here
import { describe, it, expect } from '@jest/globals';
import User from './User.js';

describe('User Class', () => {
  it('should create a user with name and email', () => {
    const user = new User({ name: 'Test User', email: 'Ttest@email.com' });

    expect(user.name).toBe('Test User');
    expect(user.email).toBe('Ttest@email.com');
    expect(user.isLoggedIn).toBe(false);
  });

  it('Should log in the user', () => {
    const user = new User({ name: 'Test User', email: 'Ttest@email.com' });
    user.login();

    expect(user.isLoggedIn).toBe(true);
  });

  it('Should log out the user', () => {
    const user = new User({ name: 'Test User', email: 'Ttest@email.com' });

    user.login();
    user.logout();

    expect(user.isLoggedIn).toBe(false);
  });

  it('Should update user profile', () => {
    const user = new User({ name: 'Test User', email: 'Ttest@email.com' });
    user.updateProfile({ email: 'test@domain.com' });

    expect(user.email).toBe('test@domain.com');
  });
});
