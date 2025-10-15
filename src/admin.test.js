import { Admin } from "./Admin";
import User from "./User";
describe("Admin class", () => {
  beforeEach(() => {
    User.users = [];
  });

  test("admin should get all users", () => {
    const admin = new Admin("Admin", "admin@example.com", "adminpw");
    const user1 = new User("User1", "user1@example.com", "pw1");
    const user2 = new User("User2", "user2@example.com", "pw2");
    const users = admin.getUsers(admin);
    expect(users).toContain(admin);
    expect(users).toContain(user1);
    expect(users).toContain(user2);
    expect(users.length).toBe(3);
  });

  test("non-admin should not get all users", () => {
    const user = new User("User", "user@example.com", "pw");
    expect(() => user.getUsers(user)).toThrow(TypeError); // user.getUsers is not a function
  });
});
//test
