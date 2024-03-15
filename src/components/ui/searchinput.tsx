import React from "react";

const SearchForm = ({ placeholder, searchStyle, inputStyle }: any) => {
  return (
    <div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-semibold  text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative !z-0">
        <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className={`block w-full !pl-12 sm:pr-[90px] md:pr-[510px] p-2 sm:p-5 ps-10 text-sm text-gray-900 rounded-full border-0 !border-primary !outline-primary bg-gray-50 focus:ring-primary focus:border-primary  ${inputStyle}`}
          placeholder={placeholder}
          required
        />
        <div
          className={`absolute end-0.5 sm:bottom-0.5 bottom-1 flex items-center ${searchStyle}`}
        >
          <ul className=" hidden md:flex">
            <li className="border-l-2 px-10 py-2 text-[12px] cursor-pointer hover:text-primary  text-gray-500">
              Near me
            </li>
            <li className="border-l-2 border-r-2 px-10 py-2 text-[12px] cursor-pointer hover:text-primary  text-gray-500">
              City
            </li>
            <li className="px-10 py-2 text-[12px] cursor-pointer hover:text-primary  text-gray-500">
              Postal Code
            </li>
          </ul>
          <button className=" hidden sm:block  hover:bg-opacity-80 bg-primary font-bold text-white focus:outline-none   rounded-full text-[14px] px-8 py-1 sm:py-[18px] ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
