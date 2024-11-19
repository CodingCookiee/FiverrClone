import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";


const Login = () => {
  const [identifier, setIdentifier] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Determine if identifier is email or username 
    const loginData = identifier.includes("@") || identifier.includes("gmail") || identifier.includes(".com") || identifier.includes(".net") || identifier.includes(".org")
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
        <form 
          onSubmit={handleSubmit}
          className="w-[300px] h-full p-[100px] pl-0 pr-0 flex flex-col gap-5 ">
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
            className="p-5 border border-solid border-[lightgrey] rounded-md"
          />

          <label htmlFor="password" className="text-[gray] text-[18-px]">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-5 border border-solid border-[lightgrey] rounded-md"
          />
          
          <button
            type="submit"
            className="border-none p-5 text-white font-medium bg-[#1dbf73]
        hover:bg-[#10b981] transition-all rounded-md mt-5 text-[18px] cursor-pointer"
          >
            Login
          </button>
          {error && <span className="text-red-500">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
