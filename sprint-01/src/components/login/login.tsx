import { useState } from "react";
import "./login.css";

type LoginProps = {
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
};

const Login = ({ users, setUsers }: LoginProps) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") return;

    setUsers([...users, username]);
    setUsername("");
    setPassword("");
  };

  const handleLogout = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
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

      <h3>Logged In Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleLogout(index)}>Logout</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
