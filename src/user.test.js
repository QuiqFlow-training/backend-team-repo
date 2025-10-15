import { Admin } from "./Admin";
import User from "./User";

describe("User class", () => {
  beforeEach(() => {
    // Clear users before each test
    User.users = [];
  });

  test("should create a user and add to users list", () => {
    const user = new User("Alice", "alice@example.com", "password123");
    expect(User.users.length).toBe(1);
    expect(User.users[0]).toBe(user);
  });

  test("should log in with correct credentials", () => {
    const user = new User("Bob", "bob@example.com", "securepass");
    expect(user.logIn("bob@example.com", "securepass")).toBe(true);
    expect(user.isLoggedIn).toBe(true);
  });

  test("should not log in with incorrect credentials", () => {
    const user = new User("Charlie", "charlie@example.com", "charliepw");
    expect(user.logIn("charlie@example.com", "wrongpw")).toBe(false);
    expect(user.isLoggedIn).toBe(false);
  });

  test("should log out", () => {
    const user = new User("Dave", "dave@example.com", "davepw");
    user.logIn("dave@example.com", "davepw");
    user.logOut();
    expect(user.isLoggedIn).toBe(false);
  });

  test("should update profile", () => {
    const user = new User("Eve", "eve@example.com", "evepw");
    user.updateProfile("Bio text", "https://eve.me");
    expect(user.profile).toEqual({
      bio: "Bio text",
      website: "https://eve.me",
    });
  });
});
