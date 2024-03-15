"use client";
import React from "react";

const Button = ({ children, className, onClick, type, disabled }: any) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`focus:ring-primary hover:scale-110 transition-all text-white font-inter py-2 px-4 rounded-lg bg-primary hover:!text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
