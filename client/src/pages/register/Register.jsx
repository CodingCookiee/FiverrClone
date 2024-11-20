import React, { useState } from "react";
import ToggleSwitch from "./toggleSwitch";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/upload";

const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    general: ""
  });
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    phone: "",
    desc: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear specific error when user starts typing in the field
    if (name === 'username') {
      setErrors(prev => ({ ...prev, username: '' }));
    } else if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSeller = (e) => {
    setUser((prev) => ({ ...prev, isSeller: e.target.checked }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(user.username)) {
      errors.username = "Username can only contain letters, numbers and underscores";
      isValid = false;
    } else if (user.username.length < 5 || user.username.length > 20) {
      errors.username = "Username must be at least 5 and at most 20 characters long";
      isValid = false;
    } 

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!passwordRegex.test(user.password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter and one number";
      isValid = false;
    }

    // Country validation
    if (!user.country) {
      errors.country = "Country is required";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/login");
    } catch (err) {
      if (err.response.data.includes("E11000 duplicate key error")) {
        if (err.response.data.includes("username")) {
          setErrors(prev => ({...prev, username: "Username is already taken"}));
        } else if (err.response.data.includes("email")) {
          setErrors(prev => ({...prev, email: "Email is already registered"}));
        }
      }
      else {
        setErrors(prev => ({...prev, general: err.response.data}));
      }
    }
  };

  return (
    <div className="register flex items-center justify-center">
      <form
        className="w-[960px] flex gap-[120px] p-[100px] pl-0 pr-0"
        onSubmit={handleSubmit}
      >
        <div className="left flex-1 flex flex-col gap-2.5 justify-between">
          <h1 className="text-[#555555] font-semibold text-2xl">
            Create a new account
          </h1>
          <label htmlFor="username" className="color-[gray] text-[18px]">
            Username<span className="text-red-500">*</span>
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            name="username"
            type="text"
            id="username"
            placeholder="John Doe"
            onChange={handleChange}
            value={user.username}
          />
          {validationErrors.username && (
            <span className="text-red-500 text-sm">
              {validationErrors.username}
            </span>
          )}
          {errors.username && <span className="text-red-500">{errors.username}</span>}
          <label htmlFor="email" className="color-[gray] text-[18px]">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            name="email"
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            onChange={handleChange}
            value={user.email}
          />
          {validationErrors.email && (
            <span className="text-red-500 text-sm">
              {validationErrors.email}
            </span>
          )}
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label htmlFor="password" className="color-[gray] text-[18px]">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            value={user.password}
          />
          {validationErrors.password && (
            <span className="text-red-500 text-sm">
              {validationErrors.password}
            </span>
          )}
          <label htmlFor="file" className="color-[gray] text-[18px]">
            Profile Picture
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            type="file"
            id="file"
            onChange={handleFileChange}
          />
          <label htmlFor="country" className="color-[gray] text-[18px]">
            Country<span className="text-red-500">*</span>
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            name="country"
            type="text"
            id="country"
            placeholder="USA"
            onChange={handleChange}
            value={user.country}
          />
          {validationErrors.country && (
            <span className="text-red-500 text-sm">
              {validationErrors.country}
            </span>
          )}
          {errors.general && <span className="text-red-500">{errors.general}</span>}
          <button
            className="bg-[#1dbf73] hover:bg-[#10b981] transition-all text-[white]
             p-[20px] rounded-md border-none font-medium text-[18px] cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="right flex-1 flex flex-col gap-2.5 justify-between">
          <h1 className="text-[#555555] font-semibold text-2xl">
            I want to become a seller
          </h1>
          <div className="toggleSwitch flex items-center gap-2">
            <label htmlFor="toggle" className="color-[gray] text-[18px]">
              Activate the seller account
            </label>
            {/* Passing handleSeller as the onChange prop */}
            <ToggleSwitch
              checked={user.isSeller}
              onChange={handleSeller}
              id="toggle"
              name="isSeller"
            />
          </div>
          <label htmlFor="phone" className="color-[gray] text-[18px]">
            Phone Number
          </label>
          <input
            className="p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            name="phone"
            type="text"
            id="phone"
            placeholder="+1 234 567 89"
            onChange={handleChange}
            value={user.phone}
          />
          <label htmlFor="desc" className="color-[gray] text-[18px]">
            Description
          </label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            className="min-h-[200px] p-[20px] border border-solid border-[lightgrey] rounded-md  
            shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            onChange={handleChange}
            value={user.desc}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
