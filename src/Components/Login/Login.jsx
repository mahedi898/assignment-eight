import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-10">
      <div className="bg-gray-100 p-8 shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-normal text-center mb-6">Login to <span className="font-bold text-fuchsia-800">Gadget Haven</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500">Or sign in with</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              <FaFacebook className="mr-2" /> Facebook
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">
        Don&apos;t  have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
