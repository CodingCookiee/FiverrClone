import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const ToggleSwitch = ({ checked, onChange, id, name }) => {
  return (
    <div className="toggle flex items-center gap-2">
      <label className="switch relative inline-block w-14 h-7">
        <input
          type="checkbox"
          onChange={onChange}     // Trigger parent-provided handler
          className="opacity-0 w-0 h-0"
          id={id}                 // Set passed `id`
          name={name}             // Set passed `name`
          checked={checked}       // Controlled by parent
        />
        
        {/* Background Slider */}
        <span
          className={`slider absolute cursor-pointer inset-0 transition-colors duration-300 ease-in-out rounded-full ${
            checked ? "bg-[#1dbf73]" : "bg-gray-300"
          }`}
        ></span>
        
        {/* Toggle Circle with Icon */}
        <span
          className={`absolute h-5 w-5 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out transform ${
            checked ? "translate-x-8" : "translate-x-1"
          } bottom-1`}
        >
          {checked ? (
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
