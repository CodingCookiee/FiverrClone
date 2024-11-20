import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("/auth/verify-user", { identifier });
      navigate("/change-password", { state: { userId: response.data.userId } });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[500px] h-screen flex flex-col justify-center gap-5">
        <h1 className="text-[gray] text-3xl mb-5">Reset Password</h1>
        <input
          type="text"
          placeholder="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="p-[20px] border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
        />
        <button 
          type="submit"
          className="border-none p-5 text-white bg-[#1dbf73] rounded-md hover:bg-[#10b981] font-medium text-lg"
        >
          Continue
        </button>
        {error && <span className="self-center font-base text-red-500 text-md">{error}</span>}
      </form>
    </div>
  );
};

export default ForgotPassword;
