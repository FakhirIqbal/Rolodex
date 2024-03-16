"use client";
import { FaLocationDot } from "react-icons/fa6";
// import { useState } from "react";
import TextFeild from "@/components/forms/TextFeild";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RadioInput from "@/components/forms/radioinput";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";

function BusinessHours({
  register,
  errors,
  watch,
  updateDropdownValue,
  Values,
}: any) {
  const [days, setDays] = useState<any>([
    {
      day: "Monday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Tuesday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Wednesday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Thursday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Friday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Saturday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Sunday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
  ]);

  const [timeOptions, setTimeOptions] = useState<any>([]);
  const [openingHours, setOpeningHours] = React.useState<any>(null);
  const [closingHours, setClosingHours] = React.useState<any>(null);
  const [dropdownCount, setDropdownCount] = useState<any>(1);

  useEffect(() => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    setTimeOptions([...options, "24:00"]);
  }, []);

  const handleCheckboxClick = (index: any) => {
    const updatedWeekDays = [...days];
    updatedWeekDays[index].isChecked = !updatedWeekDays[index].isChecked;
    setDays(updatedWeekDays);
  };

  const addDropdown = (index: any) => {
    const updatedDays = [...days];
    if (updatedDays[index].timing.length === 1) {
      updatedDays[index].timing.push({ openingHours: "", closingHours: "" });
      setDays(updatedDays);
    }
  };


  return (
    <div className="">
      <h2 className="text-lg font-bold">Opening Hours</h2>
      <>
        {days.map((v: any, i: any) => (
          <div key={i}>
            <h2 className="mt-2 font-bold">{v.day}</h2>
            <div className="flex justify-between flex-wrap mt-2">
              <div className="flex items-center mb-4">
                <input
                  checked={v.isChecked}
                  onChange={() => handleCheckboxClick(i)}
                  type="checkbox"
                  className="w-4 h-4 text-[#25AEE1] bg-gray-100 border-gray-300 rounded focus:ring-[#25AEE1] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Closed
                </label>
              </div>
              <div className="flex w-96 justify-between min-w-96">
                {!v.isChecked && (
                  <div className="flex flex-col">
                    {v.timing.map((timingItem: any, timingIndex: any) => (
                      <div className="flex " key={timingIndex}>
                        <div className="flex flex-col mr-4">
                          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Opening hours
                          </label>
                          <Dropdown
                            className="w-full sm:w-40 border-2 cursor-pointer hover:border-[#25AEE1] border-gray-200 rounded-lg"
                            title="Select Time"
                            onChange={(openingHours: any) => {
                              const updatedDays = [...days];
                              updatedDays[i].timing[timingIndex].openingHours =
                                openingHours;
                              setDays(updatedDays);
                            }}
                            options={timeOptions}
                          />
                        </div>
                        {v.timing[0].openingHours != "24:00" && (
                          <div className="flex flex-col">
                            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                              Closing hours
                            </label>
                            <Dropdown
                              className="w-full sm:w-40 border-2 cursor-pointer hover:border-[#25AEE1] border-gray-200 rounded-lg"
                              title="Select Time"
                              onChange={(closingHours: any) => {
                                const updatedDays = [...days];
                                updatedDays[i].timing[
                                  timingIndex
                                ].closingHours = closingHours;
                                setDays(updatedDays);
                              }}
                              options={timeOptions}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {!v.isChecked && v.timing[0].openingHours != "24:00" &&  (
                  <div className="mt-8 ms-4 text-[25px] cursor-pointer hover:scale-110 hover:transition-all">
                    <IoAddSharp onClick={() => addDropdown(i)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default BusinessHours;
