import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../Footer";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // ✅ HANDLE REGISTER FUNCTION (FIXED)
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      alert("Please fill in all fields including role");
      return;
    }

    // ✅ SAVE USER DATA (SIMULATION AUTH)
    const userData = {
      name,
      email,
      password,
      role,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert(`Registered successfully as ${role}!`);

    // redirect back to login or landing page
    navigate("/");
  };

  return (
    <div className="register-container">

      <Navbar />

      <main className="register-main">

        <div className="register-card">

          <h1 className="register-title">Create Account</h1>

          <form onSubmit={handleRegister} className="register-form">

            {/* NAME */}
            <div>
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            {/* ROLE */}
            <div>
              <label>Select Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">-- Select Role --</option>
                <option value="Student">Student</option>
                <option value="Coordinator">Coordinator</option>
                <option value="Administrator">Administrator</option>
              </select>
            </div>

            <button type="submit">
              Register
            </button>

          </form>
        </div>

      </main>

      <Footer />

    </div>
  );
}