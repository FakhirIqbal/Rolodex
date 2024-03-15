"use client";
import React from "react";
const AddToFav = (props: any) => {
  return (
    <svg
      className={`font-semibold cursor-pointer `}
      style={{
        fill: props.isFavorite ? "#25AAE1" : "",
        stroke: props.isFavorite ? "none" : "",
      }}
      width={props.isFavorite ? "22" : "20"}
      height={props.isFavorite ? "20" : "18"}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4845 16.4392C10.202 16.5411 9.73677 16.5411 9.45431 16.4392C7.04505 15.5989 1.66162 12.0933 1.66162 6.1516C1.66162 3.52877 3.73025 1.40674 6.28074 1.40674C7.79275 1.40674 9.1303 2.15369 9.96939 3.30808C10.3962 2.7189 10.9522 2.24004 11.5927 1.90987C12.2333 1.57969 12.9406 1.40738 13.658 1.40674C16.2085 1.40674 18.2772 3.52877 18.2772 6.1516C18.2772 12.0933 12.8937 15.5989 10.4845 16.4392Z"
        stroke={props.isFavorite ? "none" : "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddToFav;
