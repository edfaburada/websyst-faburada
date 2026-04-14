import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // =========================
  // LOGIN (ROLE-BASED)
  // =========================
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");

      // ✅ ROLE-BASED REDIRECT
      if (storedUser.role === "Student") {
        navigate("/dashboard/student");
      } else if (storedUser.role === "Coordinator") {
        navigate("/dashboard/coordinator");
      } else if (storedUser.role === "Administrator") {
        navigate("/dashboard/admin");
      }

    } else {
      alert("Invalid email or password");
    }
  };

  // =========================
  // REGISTER (SIMPLE SAVE)
  // =========================
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Registration successful!");

      // Save basic user (you can expand this later)
      localStorage.setItem(
        "user",
        JSON.stringify({
          name,
          email,
          password,
          role: "Student", // default role if not selected elsewhere
        })
      );

      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login-container">

      <Navbar />

      <main className="login-main">

        <div className="login-card">

          <h1 className="login-title">
            {isRegister ? "Create Account" : "Login"}
          </h1>

          {/* ================= LOGIN FORM ================= */}
          {!isRegister ? (
            <form onSubmit={handleLogin} className="login-form">

              <div>
                <label className="login-label">Email</label>
                <input
                  className="login-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="login-label">Password</label>
                <input
                  className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login-button" type="submit">
                Login
              </button>

            </form>
          ) : (
            /* ================= REGISTER FORM ================= */
            <form onSubmit={handleRegister} className="login-form">

              <div>
                <label className="login-label">Full Name</label>
                <input
                  className="login-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="login-label">Email</label>
                <input
                  className="login-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="login-label">Password</label>
                <input
                  className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login-button" type="submit">
                Register
              </button>

            </form>
          )}

          {/* SWITCH TEXT */}
          <p className="login-switch-text">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </p>

          <button
            onClick={() => setIsRegister(!isRegister)}
            className="login-switch-btn"
          >
            {isRegister ? "Go to Login" : "Create Account"}
          </button>

        </div>

      </main>

      <Footer />
    </div>
  );
}