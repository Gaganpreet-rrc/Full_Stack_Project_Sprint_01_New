import { useState } from "react";
import { LoginRepository } from "../../repositories/LoginRepo";
import "./login.css";

// Initialize the repository
const loginRepo = new LoginRepository();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUsers, setLoggedInUsers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter username and password");
      return;
    }

    // Check username in repository
    const user = loginRepo.getByUsername(username);
    if (!user) {
      setMessage("User not found");
      return;
    }

    // Check password
    if (user.password !== password) {
      setMessage("Incorrect password");
      return;
    }

    // Add user to logged-in list if not already there
    if (!loggedInUsers.includes(username)) {
      setLoggedInUsers([...loggedInUsers, username]);
    }

    setMessage(`Welcome ${username}!`);
    setUsername("");
    setPassword("");
  };

  // Handle logout
  const handleLogout = (index: number) => {
    const updatedUsers = loggedInUsers.filter((_, i) => i !== index);
    setLoggedInUsers(updatedUsers);
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
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
