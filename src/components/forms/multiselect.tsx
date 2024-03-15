"use client";

import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  items: string[];
  getValues: any;
}

const MultiSelect: React.FC<DropdownProps> = ({ items, getValues }) => {
  const productNames: string[] = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Camera",
    "Smartwatch",
    "Tablet",
    "Fitness Tracker",
    "Wireless Earbuds",
    "Gaming Console",
    "4K TV",
    "Bluetooth Speaker",
    "Coffee Maker",
    "Robot Vacuum",
    "Air Purifier",
    "Drone",
    "Electric Toothbrush",
    "Portable Charger",
    "External Hard Drive",
    "Wireless Router",
    "Digital Camera",
    "Printers",
    "Monitor",
    "Graphics Card",
    "Mechanical Keyboard",
    // Add more product names as needed
  ];
  const serviceNames: string[] = [
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Digital Marketing",
    "SEO Services",
    "Content Writing",
    "Social Media Management",
    "IT Consulting",
    "Cloud Computing",
    "Data Analytics",
    "Cybersecurity",
    "UI/UX Design",
    "Video Production",
    "Photography Services",
    "Event Planning",
    "Consulting Services",
    "Financial Planning",
    "Legal Services",
    "Healthcare Services",
    "Fitness Coaching",
    "Personal Training",
    "Online Education",
    "Language Translation",
    "Virtual Assistance",
    // Add more service names as needed
  ];
  const serviceVal = getValues().sevice_type;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // setIsOpen(true);
    setSelectedItems([]);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [serviceVal, dropdownRef]);
  useEffect(() => {
    if (serviceVal === "product") {
      setFilteredItems(productNames);
    } else {
      setFilteredItems(serviceNames);
    }
  }, [serviceVal]);

  const handleInputChange = (input: string) => {
    setInputValue(input);
    let filtered;
    if (serviceVal === "product") {
      filtered = productNames.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      filtered = serviceNames.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
    }
    // Filter items based on input value

    // If there is no match, include the input itself as an option
    if (!filtered.includes(input) && input.trim() !== "") {
      setFilteredItems([input, ...filtered]);
    } else {
      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item: string) => {
    // Toggle item selection
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }

    // Clear input value when an item is selected
    setInputValue("");
    // Reset filtered items
    // setFilteredItems(items);
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full ">
        <div ref={dropdownRef} className="flex flex-col items-center relative">
          <div className="w-full">
            <div className="my-2 p-1 flex border-2 border-gray-200 bg-white rounded-lg">
              <div className="flex flex-auto flex-wrap">
                {selectedItems.map((item) => (
                  <div
                    key={item}
                    className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-teal-700 bg-teal-100 border border-primary"
                  >
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                      {item}
                    </div>
                    <div className="flex flex-auto flex-row-reverse">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                          onClick={() => handleItemClick(item)}
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex-1">
                  <input
                    placeholder={
                      selectedItems.length === 0
                        ? "Select" + " " + serviceVal
                        : ""
                    }
                    className="bg-transparent outline-none p-1 px-2 appearance-none  h-full w-full text-gray-800"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onClick={() => setIsOpen(true)}
                  />
                  {isOpen && (
                    <div className="absolute  mt-2 shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
                      {getValues().sevice_type === "product" ? (
                        <div className="grid grid-cols-3  gap-2 w-full">
                          {filteredItems.map((item) => (
                            <div
                              key={item}
                              className="cursor-pointer w-full border-gray-100  border-b hover:bg-teal-100"
                              onClick={() => handleItemClick(item)}
                            >
                              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-l-primary">
                                <div className="w-full items-center flex">
                                  <div className="mx-2 leading-6 text-sm">
                                    {item}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-2 w-full">
                          {filteredItems.map((item) => (
                            <div
                              key={item}
                              className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                              onClick={() => handleItemClick(item)}
                            >
                              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                                <div className="w-full items-center flex">
                                  <div className="mx-2 leading-6 text-sm">
                                    {item}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center border-gray-200">
                <button
                  type="button"
                  className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`feather feather-chevron-up w-4 h-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
