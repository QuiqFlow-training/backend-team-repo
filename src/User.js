export default class User {
  static users = [];
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = "user";
    this.isLoggedIn = false;
    this.profile = { bio: "", website: "" };
    User.users.push(this);
  }

logOut() {
    this.isLoggedIn = false;
  }
}
