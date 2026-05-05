import React from "react";

const Button = ({ title = "Get Started" }) => {
  return (
    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 group">
      <span>{title}</span>

      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17L17 7M7 7h10v10"
        />
      </svg>
    </button>
  );
};

export default Button;
