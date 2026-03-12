import type { LoginUser } from "../types/LoginUser";
import { LoginRepository } from "../repositories/LoginRepo";

/**
 * LoginService handles business logic for login
 * Uses the repository instead of the component calling it directly
 */
export class LoginService {
  private repo: LoginRepository;

  constructor(repo: LoginRepository) {
    this.repo = repo;
  }

  login(username: string, password: string): string | null {
    const user = this.repo.getByUsername(username);
    if (!user) return "User not found";
    if (user.password !== password) return "Incorrect password";
    return null;
  }

  getAllUsers(): LoginUser[] {
    return this.repo.getAll();
  }
}