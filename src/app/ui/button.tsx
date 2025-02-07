import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 w-96 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {text}
    </button>
  );
};

export default Button;
