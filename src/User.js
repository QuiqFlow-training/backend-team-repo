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
 login() {
    this.isLoggedIn = true;
    console.log(`${this.name} is logged in`);
    return this;
  }

  updateProfile(newDetails) {
    Object.assign(this, newDetails);
    console.log(`${this.name}'s profile updated`);
    return this;
  }
  
logOut() {
    this.isLoggedIn = false;
  }
}
