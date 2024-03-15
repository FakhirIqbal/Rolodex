"use client";
import React, { useState } from "react";
import Slider from "react-slick";
const Dropdown = ({
  title,
  className,
  drophover,
  options,
  onChange,
  error,
  buttonStyle,
  styleTitle,
}: any) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option: any) => {
    // console.log(option);
    if (option?.name) {
      setSelectedOption(option.name);
    } else {
      setSelectedOption(option);
    }
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
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="hover:bg-primary hover:text-white hover:border-0 bg-transparent absolute left-[39%]  z-10 -bottom-7
     font-bold transform border-[1px] border-black text-black rounded-full h-6 w-6  flex items-center justify-center  shadow-lg  text-lg     "
      onClick={onClick}
    >
      &lt;
    </button>
  );

  // Custom Next Arrow Component
  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="absolute hover:bg-primary hover:border-0  hover:text-white right-[39%] -bottom-7 transform border-[1px] border-black text-black rounded-full text-lg  h-6 w-6 flex items-center justify-center shadow-lg font-bold    "
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <div
        className={`relative inline-block text-left ${className}`}
        onMouseEnter={drophover && openDropdown}
        onMouseLeave={drophover && closeDropdown}
        onClick={toggleDropdown}
      >
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`rounded-full bg-white text-gray-500 font-semibold justify-between w-full text-sm px-4 py-2.5 text-center inline-flex items-center font-noto ${buttonStyle}`}
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
              className="py-2 text-sm text-gray-700 bg-white rounded-lg font-noto"
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
              {options?.map((items: any, index: any) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(items)}
                  className={`block px-4 py-2 hover:bg-gray-100 font-semibold ${styleTitle}`}
                >
                  {items?.name ? items?.name : items}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
        {" "}
        {error}
      </span>
    </>
  );
};

export default Dropdown;
