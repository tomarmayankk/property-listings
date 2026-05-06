import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) navigate("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT: Branding / Info */}
      <div className="hidden md:flex flex-col justify-center bg-gray-900 text-white p-12">
        <h1 className="text-3xl font-semibold mb-4">
          PropertyHub Admin
        </h1>
        <p className="text-gray-400 max-w-sm">
          Manage listings, verify properties, and handle user inquiries
          from one centralized dashboard.
        </p>
      </div>

      {/* RIGHT: Login Form */}
      <div className="flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border">
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Admin Login
          </h2>

          <div className="space-y-4">
            <input
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-700 transition font-medium"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}