"use client";
import TextFeild from "@/components/forms/TextFeild";
import Dropdown from "@/components/ui/custom_dropdown";
import React, { useState } from "react";
import Image from "next/image";
function Timing({ register, errors, updateDropdownValue, day }: any) {
  const [addShift, setshif] = useState(false);
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 items-center gap-4">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-primary">{">"}</h1>
        <h1 className="text-center font-semibold">{day}</h1>
      </div>
      <div className="col-span-2 ">
        <div className="flex gap-2">
          <TextFeild
            required
            error={errors?.opening_time?.message}
            name={"opening_time"}
            register={register}
            inputType={"text"}
            placeholder={"00 : 00"}
            className={""}
          />

          <TextFeild
            name={"closing_time"}
            register={register}
            error={errors?.closing_time?.message}
            required
            inputType={"text"}
            placeholder={"00 : 00"}
            className={""}
          />
          <div className="flex justify-end items-center pr-2">
            <button
              type="button"
              onClick={() => {
                setshif(!addShift);
              }}
              className={`text-2xl text-gray-500 ml-auto ${
                addShift ? "rotate-[45deg]" : ""
              }`}
            >
              {" "}
              +
            </button>
          </div>
        </div>

        {addShift && (
          <div className="flex gap-2 w-[94%]">
            <TextFeild
              required
              error={errors?.opening_time?.message}
              name={"opening_time"}
              register={register}
              inputType={"text"}
              placeholder={"00 : 00"}
              className={""}
            />

            <TextFeild
              name={"closing_time"}
              register={register}
              error={errors?.closing_time?.message}
              required
              inputType={"text"}
              placeholder={"00 : 00"}
              className={""}
            />
          </div>
        )}
      </div>

      {/* <div>
        <Dropdown
          className={"!border-2 !w-full"}
          title={"Day"}
          options={[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ]}
          onChange={(selectedOption: any) =>
            updateDropdownValue("day", selectedOption)
          }
        />
      </div> */}
    </div>
  );
}

export default Timing;
