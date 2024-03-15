import React, { useState } from "react";
import Image from "next/image";
const ThreeDotDropdown = ({ deleteAdd, log }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block ">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className=" group relative w-8 h-8 flex items-center justify-center  overflow-hidden transition-transform transform-gpu   z-10  p-2 group text-gray-700  shadow-md  bg-white  rounded-full border-gray-300  hover:border-primary"
      >
        <Image
          src={"/icons/dotgray.svg"}
          className=" object-cover transition-opacity duration-300 group-hover:hidden"
          sizes="100vw"
          height={4}
          width={4}
          alt={"icon"}
        />
        <Image
          src={"/icons/dots3.svg"}
          className=" object-cover  group-hover:flex hidden transition-opacity duration-300"
          sizes="100vw"
          height={4}
          width={4}
          alt={"icon"}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && !log && (
        <div
          onClick={closeDropdown}
          className="absolute right-0 top-6 z-20 flex flex-col w-[140px] py-2 mt-2 origin-top-right bg-white rounded-xl shadow-xl "
        >
          <h1 className="flex gap-1 px-4 py-1 cursor-pointer text-sm text-gray-600 capitalize transition-colors duration-300 transform ">
            <Image
              src={"/icons/editlisting.svg"}
              className=""
              sizes="100vw"
              height={15}
              width={15}
              alt={"icon"}
            />
            Edit
          </h1>
          <h1 className="flex gap-1 px-4 py-1 cursor-pointer text-sm text-gray-600 capitalize transition-colors duration-300 transform ">
            <Image
              src={"/icons/editlisting.svg"}
              className=""
              sizes="100vw"
              height={15}
              width={15}
              alt={"icon"}
            />
            Promote
          </h1>
          <h1 className="flex gap-1  cursor-pointer px-4 py-1 text-sm text-gray-600 capitalize transition-colors duration-300 transform ">
            <Image
              src={"/icons/editlisting.svg"}
              className=""
              sizes="100vw"
              height={15}
              width={15}
              alt={"icon"}
            />
            Deactivate
          </h1>

          <h1
            onClick={deleteAdd}
            className="flex gap-1 px-4 py-1 text-sm cursor-pointer text-primary capitalize transition-colors duration-300 transform "
          >
            <Image
              src={"/icons/editlisting.svg"}
              className=""
              sizes="100vw"
              height={15}
              width={15}
              alt={"icon"}
            />
            Delete
          </h1>
        </div>
      )}
      {isOpen && log && (
        <div
          onClick={closeDropdown}
          className="absolute right-0 top-6 z-20 flex flex-col w-[100px] py-2 mt-2 origin-top-right bg-white rounded-xl shadow-xl "
        >
          <h1 className="flex cursor-pointer gap-1 px-4 py-1 text-sm text-gray-600 capitalize transition-colors duration-300 transform ">
            Not you?
          </h1>
          <h1 className="flex gap-1 cursor-pointer px-4 py-1 text-sm text-primary capitalize transition-colors duration-300 transform ">
            Log out
          </h1>
        </div>
      )}
    </div>
  );
};

export default ThreeDotDropdown;
