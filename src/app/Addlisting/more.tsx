"use client";
import { styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";


function More() {

  const [isSelected, setIsSelected] = useState<any>(""); // Change state type to boolean
  const [isAmenities, setIsAmenities] = useState<any>(false); // Change state type to boolean
  const [isPlanning, setIsPlanning] = useState<any>(false); // Change state type to boolean
  const [isServiceOptions, setIsServiceOptions] = useState<any>(false); // Change state type to boolean
  
  
const style = {
  boxShadow: "0px 2px 5px black inset"
}
  return (
   <>
    <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
    <h1 className="text-4xl font-bold">More</h1>
    <div>
      <h1 className="font-bold text-2xl pt-5">Accessibility</h1>
      <p className="text-xs pt-2">
        Let customers know more about your business by showing attributes on your Business Profile.
        These may appear publicly on Search, Maps, and other Rolodex services
      </p>
      <h2 className="font-semibold pt-3">Has wheelchair-accessible</h2>
      <div className="pt-5">
        <button
          onClick={() => setIsSelected("selected")}
          type="button"
          className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isSelected === "selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          Seating
        </button>
        <button
          onClick={() => setIsSelected("un-selected")}
          type="button"
          className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isSelected === "un-selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          Toilet
        </button>
      </div>
    </div>
    <div>
    <h1 className="font-bold text-2xl pt-5">Amenties</h1>
      <p className="text-xs pt-2">
      Let customers know more about your business by showing attributes on your Business Profile. These may appear publicly on Search, Maps and other Rolodex services
      </p>
      <h2 className="font-semibold pt-3">Has gender-neutral</h2>
      <div className="pt-5">
        <button
          onClick={()=>{setIsPlanning("selected")}}
          type="button"
          className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isPlanning === "selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          Yes
        </button>
        <button
          onClick={()=>{setIsPlanning("un-selected")}}
          type="button"
          className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isPlanning === "un-selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          No
        </button>
      </div>
    </div>
    <div>
    <h1 className="font-bold text-2xl pt-5">Planning</h1>
      <p className="text-xs pt-2">
      Let customers know more about your business by showing attributes on your Business Profile. These may appear publicly on Search, Maps and other Rolodex services
      </p>
      <h2 className="font-semibold pt-3">Appointment required</h2>
      <div className="pt-5">
        <button
          onClick={()=>{setIsAmenities("selected")}}
          type="button"
          className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${isAmenities === "selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          Yes
        </button>
        <button
          onClick={()=>{setIsAmenities("un-selected")}}
          type="button"
          className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${isAmenities === "un-selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          No
        </button>
      </div>
    </div>
    <div>
    <h1 className="font-bold text-2xl pt-5">Service options</h1>
      <p className="text-xs pt-2">
      Let customers know more about your business by showing attributes on your Business Profile. These may appear publicly on Search, Maps and other Rolodex services
      </p>
      <h2 className="font-semibold pt-3">Service Offer</h2>
      <div className="pt-5">
        <button
          onClick={()=>{setIsServiceOptions("selected")}}
          type="button"
          style={isSelected == "selected" ? style : undefined}
          className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isServiceOptions === "selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          On-Site
        </button>
        <button
        
          onClick={()=>{setIsServiceOptions("un-selected")}}
          type="button"
          className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${isServiceOptions === "un-selected" ? 'bg-[#25AAE1] text-white' : 'hover:scale-110'}`}
        >
          Online
        </button>
      </div>
    </div>
  </div>
   </>
  );
}

export default More;