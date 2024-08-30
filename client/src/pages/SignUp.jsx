import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/signup", formData);
      
      if (response.data.success === false) {
        setError(response.data.message);
      } else {
        console.log("User signed up successfully!");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex justify-center min-h-screen mt-6">
      <div className="text-center">
        <h1 className="text-3xl mb-6 font-bold">Sign Up</h1>
        <form
          className="flex flex-col flex-wrap w-[300px] sm:w-[400px] space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="border rounded-lg p-3"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            disabled={loading}
            className="bg-slate-800 text-white rounded-lg p-2 uppercase hover:opacity-95 disabled:opacity-80 hover:scale-105"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <button className="bg-red-800 text-white rounded-lg p-2">
            Continue With Google
          </button>
        </form>
        <p className="text-slate-600 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-slate-800 font-bold">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
