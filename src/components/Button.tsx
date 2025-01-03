import React from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export default function Button({
    text,
    textColor = "white",  // default değer
    backgroundColor = "gray-600",
    onClick,
}: ButtonProps) {
  return (
    <button
    onClick={onClick}
      className={`bg-${backgroundColor} text-${textColor} px-4 py-2 rounded-3xl w-30 text-[14px] sm:text-[15px]`}
    >
      {text}
    </button>
  );
}
