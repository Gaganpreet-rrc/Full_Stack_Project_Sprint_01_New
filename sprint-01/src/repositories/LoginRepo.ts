import type { LoginUser } from "../types/LoginUser";

// Test data for login
let testLoginUsers: LoginUser[] = [
  { id: 1, username: "gaganpreet", password: "1234" },
  { id: 2, username: "manjot", password: "abcd" },
];

export class LoginRepository {
  // Get all users
  getAll(): LoginUser[] {
    return testLoginUsers;
  }

  // Get user by username 
  getByUsername(username: string): LoginUser | undefined {
    return testLoginUsers.find(user => user.username === username);
  }

  // Create a new login user
  create(user: LoginUser): LoginUser {
    testLoginUsers.push(user);
    return user;
  }

  // Update user
  update(id: number, updatedUser: Partial<LoginUser>): LoginUser | undefined {
    const user = testLoginUsers.find(u => u.id === id);
    if (user) {
      Object.assign(user, updatedUser);
      return user;
    }
    return undefined;
  }

  // Delete a user
  delete(id: number): boolean {
    const beforeDeleteCount = testLoginUsers.length;
    testLoginUsers = testLoginUsers.filter(user => user.id !== id);
    return testLoginUsers.length < beforeDeleteCount;
  }
}