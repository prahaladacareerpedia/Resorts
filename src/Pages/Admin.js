
import "../App.css";
import { useState } from "react";



import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate=useNavigate()
  const handleChange = (e) => {
    e.preventDefault();
    if ((username === "Prahalada") & (password === "Praha225@")) {
      localStorage.setItem("auth",JSON.stringify({username:"parahalada"}))
      navigate("/home")
    } else {
      alert("Invalid username & password");
    }
  };

  return (
   
    <div className="Admin">
      <h1>Welcome to Resorts</h1>
      <div className="LoginForm">
        <h2>Login Details</h2>
        <form className="user" onSubmit={handleChange}>
          <label>
            Username:
            <input
              className="Id"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="Id"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    
    </div>
  );
};
  
export default Admin;
