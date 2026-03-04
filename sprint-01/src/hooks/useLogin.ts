import { useState } from "react";
import { LoginService } from "../services/loginService";
import { LoginRepository } from "../repositories/LoginRepo";

/**
 * useLogin Custom Hook
 *
 * The hook creates a LoginRepository to access user data.
 * The hook creates a LoginService to handle login validation.
 * The service calls repository methods like getByUsername().
 * The component only interacts with this hook, not the repository directly.
 *
 */
export const useLogin = () => {
  const repo = new LoginRepository();
  const service = new LoginService(repo);

  const [loggedInUsers, setLoggedInUsers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleLogin = (username: string, password: string) => {
    const error = service.login(username, password);
    if (error) {
      setMessage(error);
      return;
    }
    if (!loggedInUsers.includes(username)) {
      setLoggedInUsers([...loggedInUsers, username]);
    }
    setMessage(`Welcome ${username}!`);
  };

  const handleLogout = (index: number) => {
    setLoggedInUsers(loggedInUsers.filter((_, i) => i !== index));
  };

  return { loggedInUsers, message, handleLogin, handleLogout };
};