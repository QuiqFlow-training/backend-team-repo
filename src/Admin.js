import User from "User.js";

export class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.role = "admin";
  }

  getUsers(admin) {
    if (admin instanceof Admin) {
      return User.users;
    } else {
      throw new Error("Access denied");
    }
  }
}
