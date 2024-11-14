import React, { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div className="toggle flex items-center gap-2">
      <label className="switch relative inline-block w-14 h-7">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
          className="opacity-0 w-0 h-0"
        />
        
        {/* Background Slider */}
        <span
          className={`slider absolute cursor-pointer inset-0 transition-colors duration-300 ease-in-out rounded-full ${
            isToggled ? "bg-[#1dbf73]" : "bg-gray-300"
          }`}
        ></span>
        
        {/* Toggle Circle with Icon */}
        <span
          className={`absolute h-5 w-5 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out transform ${
            isToggled ? "translate-x-8" : "translate-x-1"
          } bottom-1`}
        >
          {isToggled ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <XMarkIcon className="h-4 w-4 text-red-500" />
          )}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
