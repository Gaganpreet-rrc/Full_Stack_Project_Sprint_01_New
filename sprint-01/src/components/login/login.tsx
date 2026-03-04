import { useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import "./login.css";

/**
 * Login Component
 *
 * - Manages login UI for users
 * - Handles login and logout directly using the repository
 *
 * - Component directly uses the repository to fetch user data
 * - For this sprint, this component demonstrates direct repository use
 */

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loggedInUsers, message, handleLogin, handleLogout} = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") return;

    handleLogin(username, password);

    setUsername("");
    setPassword("");
  };  

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Logged In Users</h3>
      <ul>
        {loggedInUsers.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => handleLogout(index)}>Logout</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
