import type { LoginUser } from "../types/LoginUser";
import { testLoginUsers } from "../data/testLoginData";

let users: LoginUser[] = [...testLoginUsers];

export class LoginRepository {

  // Get all users
  getAll(): LoginUser[] {
    return users;
  }

  // Get user by username 
  getByUsername(username: string): LoginUser | undefined {
    return users.find(user => user.username === username);
  }

  // Create a new login user
  create(user: LoginUser): LoginUser {
    users.push(user);
    return user;
  }

  // Update user
  update(id: number, updatedUser: Partial<LoginUser>): LoginUser | undefined {
    const user = users.find(u => u.id === id);
    if (user) {
      Object.assign(user, updatedUser);
      return user;
    }
    return undefined;
  }

  // Delete a user
  delete(id: number): boolean {
    const beforeDeleteCount = users.length;
    users = users.filter(user => user.id !== id);
    return users.length < beforeDeleteCount;
  }
}