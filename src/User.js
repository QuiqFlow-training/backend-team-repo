export default class User {
  constructor(userDetails) {
    const { name, email } = userDetails;
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`${this.name} is logged in`);
    return this;
  }

  // Method to log out the user

  updateProfile(newDetails) {
    Object.assign(this, newDetails);
    console.log(`${this.name}'s profile updated`);
    return this;
  }
}

/*----------------------------------------------------------------------------*/

/* Usage */

// const user1 = new User({name : 'Majed Alqudah', email: 'Majedjameel062@gmail.com'});
// user1.Login();
// console.log(user1.isLoggedIn);
// user1.updateProfile({email:"majedjameel063@gmail.com"})
// console.log(user1.email);
// user1.Logout();
// console.log(user1.isLoggedIn);
