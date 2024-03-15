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
function Location({
  register,
  errors,
  watch,
  updateDropdownValue,
  Values,
}: any) {
  
  const [location, setLocation] = useState('');
  const [areaLocation, setLocationarea] = useState<string>('');
  console.log(location)
  const handleRemoteClick = () => {
    setLocationarea('remote');
  };
  
  const handleOnSiteClick = () => {
    setLocationarea('on-site');
  };


  const handleLocationChange = (event : any ) => {
    setLocation(event.target.value);
  };

  const mapSrc = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(location)}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;


  

  return (
    <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
      <div className="flex flex-row gap-2">
      <FaLocationDot className="text-[#25AAE1] text-3xl pt-1" />
        <h1 className="text-base md:text-[27px] font-bold pt-1">Location</h1></div>
      <div>
      <div className="flex items-start pt-5">
      <button 
          onClick={handleRemoteClick}
          type="button"
          className={`h-9 w-48 rounded-lg font-bold shadow-lg active:bg-[#25AAE1] focus:text-white active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${areaLocation==="remote" ? "bg-[#25AAE1] text-white" : "bg-white text-black"}`}
        >
          Remote
        </button>
        <p className="text-sm text-gray-400 ml-1 mt-3.5 ml-5">
          (Hint: choose this option if you do not have a physical location)
        </p>
      </div>
      <button 
        onClick={handleOnSiteClick}
        type="button"
        className={`mt-5 h-9 w-48 rounded-lg font-bold shadow-lg active:bg-[#25AAE1] active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${areaLocation==="on-site" ? "bg-[#25AAE1] text-white" : "bg-white text-black"}`}
      >
        OnSite
      </button>




        <h1 className="mt-10">Location*</h1>
      <input className="mt-2 h-9 w-full rounded-lg" type="text" value={location} onChange={handleLocationChange} />

      <h1 className="mt-10 font-bold">Map</h1>
      <div className="h-[200px] rounded-2xl mt-5">
        <iframe
          className="rounded-xl"
          width="100%"
          height="100%"
          title="map"
          src={mapSrc}
        ></iframe>
      </div>
        {/* <RadioInput
          title={"OnSite"}
          value="onsite"
          name="location_type"
          register={register}
          watch={watch}
        />
        <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
          {errors?.company_type?.message}
        </span> */}
      </div>
      {/* {Values()?.location_type === "remote" && (
        <>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col sm:w-[50%] w-[100%]">
              <label className="text-sm  font-semibold">Country*</label>
              <Dropdown
                error={errors?.country?.message}
                className={"border-2 border-gray-200  w-[100%] rounded-lg "}
                title={"Germany"}
                onChange={(selectedOption: any) =>
                  updateDropdownValue("country", selectedOption)
                }
                options={["January", "February", "March", "April"]}
              />
            </div>
            <div className="flex flex-col sm:w-[50%] w-[100%]">
              <label className="text-sm  font-semibold">City*</label>
              <Dropdown
                error={errors?.city?.message}
                className={"border-2 border-gray-200  w-[100%] rounded-lg "}
                title={"Berlin"}
                onChange={(selectedOption: any) =>
                  updateDropdownValue("city", selectedOption)
                }
                options={["January", "February", "March", "April"]}
              />
            </div>
          </div>
        </>
      )}
      {Values()?.location_type === "onsite" && (
        <>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col sm:w-[50%] w-[100%]">
              <label className="text-sm  font-semibold">Country*</label>
              <Dropdown
                error={errors?.country?.message}
                className={"border-2 border-gray-200  w-[100%] rounded-lg "}
                title={"Germany"}
                onChange={(selectedOption: any) =>
                  updateDropdownValue("country", selectedOption)
                }
                options={["January", "February", "March", "April"]}
              />
            </div>
            <div className="flex flex-col sm:w-[50%] w-[100%]">
              <label className="text-sm  font-semibold">City*</label>
              <Dropdown
                error={errors?.city?.message}
                className={"border-2 border-gray-200  w-[100%] rounded-lg "}
                title={"Berlin"}
                onChange={(selectedOption: any) =>
                  updateDropdownValue("city", selectedOption)
                }
                options={["January", "February", "March", "April"]}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex flex-col sm:w-[70%] w-[100%]">
              <label className="text-sm  font-semibold">
                Province / State*
              </label>
              <Dropdown
                error={errors?.district?.message}
                className={"border-2 border-gray-200  w-[100%] rounded-lg "}
                title={"Berlin"}
                onChange={(selectedOption: any) =>
                  updateDropdownValue("district", selectedOption)
                }
                options={["January", "February", "March", "April"]}
              />
            </div>
            <TextFeild
              name={"zipCode"}
              label={"Zip code*"}
              register={register}
              inputType={"number"}
              maxLength={{ value: 8, message: "Max Length 8" }}
              minLength={{ value: 4, message: "Min Length 4" }}
              placeholder={"Zip code*"}
              error={errors?.zipCode?.message}
              className={"sm:w-[25%] w-[100%]"}
            />
          </div>
          <TextFeild
            required
            name={"streetName"}
            label={"Street Name*"}
            register={register}
            inputType={"text"}
            minLength={{ value: 4, message: "Min Length 4" }}
            placeholder={"streetName"}
            error={errors?.streetName?.message}
            className={""}
          />
          <h1 className="text-lg font-semibold"></h1>
          <div className="h-[200px] rounded-2xl">
            <iframe
              className="rounded-xl"
              width="100%"
              height="100%"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>{" "}
        </>
      )} */}
    </div>
  );
}

export default Location;