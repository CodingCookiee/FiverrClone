import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!passwordRegex.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter and one number";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
    setError("");
    setValidationError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      navigate("/forgot-password");
      return;
    }

    const validationError = validatePassword(passwords.newPassword);
    if (validationError) {
      setValidationError(validationError);
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await newRequest.put("/auth/change-password", {
        userId,
        newPassword: passwords.newPassword,
      });
      setSuccessMessage(
        "Password changed successfully. Redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] h-screen flex flex-col justify-center gap-5"
      >
        <h1 className="text-[gray] text-3xl mb-5">Change Password</h1>

        <div className="relative">
          <input
            type={showPasswords.newPassword ? "text" : "password"}
            name="newPassword"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={handleChange}
            className="w-full p-[20px] border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          <button
            type="button"
            onClick={() =>
              setShowPasswords((prev) => ({
                ...prev,
                newPassword: !prev.newPassword,
              }))
            }
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPasswords.newPassword ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>

        <div className="relative">
          <input
            type={showPasswords.confirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={passwords.confirmPassword}
            onChange={handleChange}
            className="w-full p-[20px] border border-solid border-[lightgrey] rounded-md shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          <button
            type="button"
            onClick={() =>
              setShowPasswords((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPasswords.confirmPassword ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="border-none p-5 text-white bg-[#1dbf73] rounded-md hover:bg-[#10b981] font-medium text-lg"
        >
          Change Password
        </button>

        {successMessage && (
          <span className="text-slate-800 text-md self-center font-thin">
            {successMessage}
          </span>
        )}
        {validationError && (
          <span className="self-center font-base text-red-500 text-md">
            {validationError}
          </span>
        )}
        {error && (
          <span className="self-center font-base text-red-500 text-md">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};

export default ChangePassword;
