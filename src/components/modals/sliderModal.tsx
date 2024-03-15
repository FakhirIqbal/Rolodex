"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import TextFeild from "../forms/TextFeild";
import { useForm } from "react-hook-form";
import { GetUser } from "../userToken";
import axios from "axios";
import { Api } from "@/utils/api";
import Star from "../stars";
import Slider from "react-slick";
const SliderModal = ({ isModalOpen, toggleModal, images, settings }: any) => {
  return (
    <div className="relative">
      {isModalOpen && (
        <div
          id="default-modal"
          aria-hidden="true"
          className="fixed top-0 h-screen bg-black bg-opacity-50 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0   overflow-y-auto  overflow-x-hidden"
        >
          <div className=" mx-auto relative  max-w-screen-md  rounded-md overflow-hidden shadow-md">
            <button
              onClick={toggleModal}
              className="bg-primary absolute   cursor-pointer right-4 top-2 z-30 flex items-center justify-center  w-8 h-8 rounded-full"
            >
              <p className="text-sm   text-white">X</p>
            </button>

            <div className="!w-full z-30">
              <Image
                src={images}
                alt={`Image  `}
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-full"
              />
            </div>
            {/* </div>
              ))}
            </Slider> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderModal;
