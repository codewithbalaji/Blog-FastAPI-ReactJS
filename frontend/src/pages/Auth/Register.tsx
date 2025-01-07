import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-contexts";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, email, password, navigate);
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
              placeholder="Username"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
              placeholder="Email"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-purple-600"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-gray-50 bg-purple-600 hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="underline text-gray-800 hover:text-purple-600 ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
