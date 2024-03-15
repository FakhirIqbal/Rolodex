"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Drop = ({
  title,
  className,
  drophover,
  options,
  onChange,
  error,
  name,
}: any) => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    if (onChange) {
      onChange(option);
    }
    // Do any additional handling based on the selected option if needed
  };
  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      onMouseEnter={drophover && openDropdown}
      onMouseLeave={drophover && closeDropdown}
      onClick={toggleDropdown}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className={`rounded-full bg-white text-gray-500 font-semibold justify-between w-full text-sm px-4 py-2.5 text-center inline-flex items-center`}
              type="button"
            >
              {selectedOption ? selectedOption : title}
              <svg
                className={`w-2.5 h-2.5 ms-3 ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}

            {isDropdownOpen && !options && (
              <div
                id="dropdown"
                className="z-10 absolute mt-0.5 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 bg-white rounded-lg"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {isDropdownOpen && options && (
              <div
                id="dropdown"
                className="z-10 absolute mt-0.5 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 max-h-[200px]  overflow-auto text-sm text-gray-700 bg-white rounded-lg"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {options.map((items: any, index: any) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(items)}
                      className="block px-4 py-2 hover:bg-gray-100 font-semibold"
                    >
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Drop;
