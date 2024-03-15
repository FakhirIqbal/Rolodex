"use client";
import React from "react";
const AccountIcons = ({ className, path1, path2 }: any) => {
  return (
    <svg
      className={`  ${className}`}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path1}
        stroke="currentColors"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {path2 && (
        <path
          d={path2}
          stroke="currentColors"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </svg>
  );
};

export default AccountIcons;
