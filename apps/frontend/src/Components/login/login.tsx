import { useState, useEffect } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUsers, setLoggedInUsers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedUsers = localStorage.getItem("loggedInUsers");
    if (savedUsers) {
      setLoggedInUsers(JSON.parse(savedUsers));
    }
  }, []);

useEffect(() => {
  if (loggedInUsers.length > 0) {
    localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
  }
}, [loggedInUsers]);

  const handleLogin = async (email: string, password: string) => {
    try {
      setMessage("");

      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Invalid email or password");
        return;
      }

      setLoggedInUsers((prev) => [...prev, data.user.email]);
      setMessage(data.message || "Login successful");
    } catch (error: any) {
      setMessage("Something went wrong");
    }
  };

  const handleLogout = (index: number) => {
    setLoggedInUsers((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") return;

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
