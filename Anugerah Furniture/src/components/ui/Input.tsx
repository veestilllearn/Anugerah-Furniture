import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", id, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-gray-300 ml-2 tracking-wide"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full bg-[#EAEAEA] text-gray-900 placeholder-gray-500 px-6 py-3.5 rounded-full border-2 border-transparent focus:outline-none focus:border-white focus:bg-white transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  );
}
