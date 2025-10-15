
import User from './User.js';
export class Admin extends User {
  constructor(userDetails) {
    super(userDetails);
    this.role = 'admin';
  }

  deleteUser(userToDelete) {
    console.log(`${this.name} deleted user ${userToDelete.name}`);
  }
  
  getUsers(admin) {
    if (admin instanceof Admin) {
      return User.users;
    } else {
      throw new Error("Access denied");
    }
  }
}
