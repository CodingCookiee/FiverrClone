import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine if identifier is email or username
    const loginData =
      identifier.includes("@") ||
      identifier.includes("gmail") ||
      identifier.includes(".com") ||
      identifier.includes(".net") ||
      identifier.includes(".org")
        ? { email: identifier, password }
        : { username: identifier, password };

    try {
      const response = await newRequest.post("/auth/login", loginData);
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="login flex items-center justify-center">
      <div className="login">
        <form onSubmit={handleSubmit} className="w-[300px] h-full p-[100px] pl-0 pr-0 flex flex-col gap-5">
          <h1 className="text-[gray] mb-5 font-light text-3xl">Sign in</h1>
          
          <label htmlFor="identifier" className="text-[gray] text-[18-px]">
            Username or Email
          </label>
          <input
            name="identifier"
            type="text"
            id="identifier"
            placeholder="Enter username or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="p-[20px] border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />

          <label htmlFor="password" className="text-[gray] text-[18-px]">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-[20px] border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="border-none p-5 text-white font-medium bg-[#1dbf73] hover:bg-[#10b981] transition-all rounded-md mt-5 text-[18px] cursor-pointer"
          >
            Login
          </button>
          {error && <span className="text-red-500 self-center">{error}</span>}
          <Link to="/forgot-password" className="flex flex-col gap-5">
            <p className="text-[gray] text-[18-px] self-center">Forgot Password?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
