import Navbar from "../components/Navbar";
import Footer from "../Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN (SIGN IN)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful");
      navigate("/home"); // redirect after login
    } else {
      alert("Please fill in all fields");
    }
  };

  // REGISTER (SIGN UP)
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Registration successful");

      // redirect back to LANDING PAGE
      navigate("/");

    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-24 px-6">

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-center mb-6">
            {isRegister ? "Create Account" : "Login"}
          </h1>

          {/* FORM */}
          {isRegister ? (
            // REGISTER FORM
            <form onSubmit={handleRegister} className="space-y-4">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600"
              >
                Register
              </button>

            </form>

          ) : (
            // LOGIN FORM
            <form onSubmit={handleLogin} className="space-y-4">

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600"
              >
                Login
              </button>

            </form>
          )}

          {/* SWITCH */}
          <p className="text-center text-sm text-gray-500 mt-4">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </p>

          <button
            onClick={() => setIsRegister(!isRegister)}
            className="w-full mt-2 text-emerald-600 font-semibold"
          >
            {isRegister ? "Go to Login" : "Create Account"}
          </button>

        </div>

      </main>

      <Footer />
    </div>
  );
}