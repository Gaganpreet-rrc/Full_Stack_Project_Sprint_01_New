import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import "./login.css";

const Login = () => {
  const { user, isSignedIn } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedInUsers, setLoggedInUsers] = useState<string[]>([]);

  useEffect(() => {
    if (!isSignedIn || !user) {
      setLoggedInUsers([]); 
      return;
    }

    const key = `loggedInUsers-${user.id}`;
    const saved = localStorage.getItem(key);

    if (saved) {
      setLoggedInUsers(JSON.parse(saved));
    } else {
      setLoggedInUsers([]);
    }
  }, [isSignedIn, user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
      setMessage("Please sign in with Clerk");
      return;
    }

    if (email && password) {
      const updatedUsers = [...loggedInUsers, email];

      setMessage("Login successful");
      setLoggedInUsers(updatedUsers);

      const key = `loggedInUsers-${user.id}`;
      localStorage.setItem(key, JSON.stringify(updatedUsers));
    } else {
      setMessage("Please fill all fields");
    }
  };

  const handleLogout = (index: number) => {
    if (!user) return;

    const updated = loggedInUsers.filter((_, i) => i !== index);
    setLoggedInUsers(updated);

    const key = `loggedInUsers-${user.id}`;
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return (
    <div className="login">
      <h2>Login</h2>

      {!isSignedIn && <p>Please sign in with Clerk</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      {isSignedIn && (
        <>
          <h3>Logged In Users</h3>
          <ul>
            {loggedInUsers.map((user, index) => (
              <li key={index}>
                {user}
                <button onClick={() => handleLogout(index)}>Logout</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Login;