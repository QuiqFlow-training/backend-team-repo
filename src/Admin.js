import User from './User.js';

class Admin extends User {
  constructor(userDetails) {
    super(userDetails);
    this.role = 'admin';
  }

  deleteUser(userToDelete) {
    console.log(`${this.name} deleted user ${userToDelete.name}`);
  }
}

export default Admin;
