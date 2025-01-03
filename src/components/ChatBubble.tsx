import React, { useState } from "react";

interface ChatBubbleProps {
  message: string;
  avatar: string;
  isSender: boolean;
  hasLink?: boolean;
  link?: string;
  bubbleColorIsGreen?: boolean;
}

export default function ChatBubble({ message, avatar, isSender, hasLink, link, bubbleColorIsGreen }: ChatBubbleProps) {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      if (link) {
        navigator.clipboard.writeText(link).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    };
  return (
    <div
      className={`flex items-center w-full ${
        isSender ? "justify-end" : "justify-start"
      } my-4`}
    >
      {!isSender && (
        <img
          src={avatar}
          alt="Avatar"
          className="w-16 h-16 rounded-full mr-3"
        />
      )}
      <div
        className={`relative px-4 py-2 lg:py-3 text-sm rounded-lg w-full bg-white text-gray-800 border ${bubbleColorIsGreen ? "border-green-500" : "border-gray-300"}`}
      >
        <p className="text-[13px] sm:text-[15px]">{message}</p>
        {!isSender && (
          <div className={`absolute top-0 left-[-10px] w-3 h-3 border ${bubbleColorIsGreen ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"} rounded-full`}></div>
        )}
        {isSender && (
          <div className={`absolute top-0 right-[-10px] w-3 h-3 border ${bubbleColorIsGreen ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"} rounded-full`}></div>
        )}
        {hasLink && (
            <div className="flex flex-col items-center justify-center mt-3">
          <button onClick={handleCopy} className=" text-white bg-gray-500  px-2 py-1 sm:py-2 focus:outline-none rounded-lg border-none hover:text-white text-[13px] sm:text-[15px]">
            {copied ? "Copied" : "Copy"}
          </button>
          </div>
        )}
      </div>
      
    </div>
  );
}

